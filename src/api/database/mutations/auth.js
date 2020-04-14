import database from "../../../../mysql/connection";
const Sequelize = require("sequelize");
import { DateTimeNow } from "../../helpers";
export const signUp = ({
  first_name,
  last_name,
  account_name,
  password,
  street,
  city,
  state,
  zip_code,
  phone_number,
  email_address
}) => {
  return database
    .query(
      `
            INSERT INTO customer (
                Cus_Fname,
                Cus_Lname,
                Cus_accName,
                Cus_accPass,
                Cus_street,
                Cus_city,
                Cus_state,
                Cus_zipCode,
                Cus_phone,
                Cus_email,
                Cus_createdAt
            ) 
            VALUES ( 
                '${first_name}', 
                '${last_name}', 
                '${account_name}',
                '${password}',
                '${street}',
                '${city}',
                '${state}',
                '${zip_code}',
                '${phone_number}',
                '${email_address}',
                '${DateTimeNow()}'
            )
        `,
      {
        type: Sequelize.QueryTypes.INSERT
      }
    )
    .then(rows => {
      console.log("Sign Up user rows:", rows);
      return rows;
    })
    .catch(err => console.error(err.stack));
};

export const login = ({ account_name, password }) => {
  return database
    .query(
      `
            SELECT Cus_ID, Cus_accName
            FROM customer
            WHERE Cus_accName = '${account_name}'
                AND Cus_accPass = '${password}'
        `,
      {
        type: Sequelize.QueryTypes.SELECT
      }
    )
    .then(rows => {
      console.log("Login user rows:", rows[0]);
      return rows[0];
    })
    .catch(err => console.error(err.stack));
};
