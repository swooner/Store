
export const getViewerRole = ( viewer ) => {
    return (
        viewer.employee_info ? viewer.employee_info.role : null
    )
};