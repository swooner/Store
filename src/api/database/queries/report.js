import database from "../../../../mysql/connection";
const Sequelize = require("sequelize");

export const getProductReportOverall = () => {
  return database
    .query(
      `
      SELECT * FROM TOTAL_REPORT_OVERALL;
        `,
      {
        type: Sequelize.QueryTypes.SELECT
      }
    )
    .then(rows => {
      console.log("getProductReportOverall rows:", rows[0]);
      return rows[0];
    })
    .catch(err => console.error(err.stack));
};

export const getProductReportOverallByMonth = ({ monthCount }) => {
  return database
    .query(
      `
      SELECT (IFNULL((SELECT  SUM((OI_quantity* (P_price + PS_surcharge))) FROM
      (((product
      JOIN product_size)
      JOIN cus_order)
      JOIN order_item)
      WHERE
      ((O_ID = OI_O_ID)
          AND (OI_P_ID= P_ID)
          AND (OI_PS_ID = PS_ID)
          AND (MONTH(OI_addedAt) = (MONTH(CURDATE()) + ${monthCount})))
         ),0)) as Total_Sale,
        IFNULL((SELECT  SUM((OI_quantity* (P_price + PS_surcharge))) FROM
        (((product
        JOIN product_size)
        JOIN cus_order)
        JOIN order_item)
        WHERE
        ((O_ID = OI_O_ID)
            AND (OI_P_ID= P_ID)
            AND (OI_PS_ID = PS_ID)
            AND (MONTH(OI_addedAt) = (MONTH(CURDATE()) + ${monthCount})))
            AND (O_paymethod ="CASH")
           ),0) as "Total_Sale_by_CASH",
           
IFNULL((SELECT  SUM((OI_quantity* (P_price + PS_surcharge))) FROM
        (((product
        JOIN product_size)
        JOIN cus_order)
        JOIN order_item)
        WHERE
        ((O_ID = OI_O_ID)
            AND (OI_P_ID= P_ID)
            AND (OI_PS_ID = PS_ID)
            AND (MONTH(OI_addedAt) = (MONTH(CURDATE()) + ${monthCount})))
            AND (O_paymethod ="CARD")
           ),0)  as "Total_Sale_by_CARD",
           (SELECT COUNT(Cus_ID) as Total_Customer FROM customer WHERE MONTH(Cus_createdAt) = MONTH(CURDATE()) + ${monthCount}) as "Total_Customer";
        `,
      {
        raw: true,
        type: Sequelize.QueryTypes.SELECT
      }
    )
    .then(rows => {
      console.log("getProductReportOverallByMonth rows:", rows[0]);
      return rows[0];
    })
    .catch(err => console.error(err.stack));
};

export const getEachProductReportByMonth = ({ monthCount }) => {
  return database
    .query(
      `
      SELECT OI_P_ID AS 'Product_ID', P_name as'Product_Name', SUM((OI_quantity)*(P_price + PS_surcharge)) as  'Total_Sale'
      FROM product, order_item, product_size 
      WHERE P_ID = OI_P_ID and OI_PS_ID = PS_ID and month(OI_addedAt) = month(CURDATE())+ ${monthCount} group by OI_P_ID;
        `,
      {
        type: Sequelize.QueryTypes.SELECT
      }
    )
    .then(rows => {
      console.log("getEachProductReportByMonth rows:", rows);
      return rows;
    })
    .catch(err => console.error(err.stack));
};
