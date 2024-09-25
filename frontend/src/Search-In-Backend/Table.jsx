const Table = ({ data }) => {
    return (
        <div>
            <table className="table  table-info">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => {
                        return (<tr key={value.id}>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.email}</td>
                                    <td>{value.gender}</td>
                                </tr>)})}
                </tbody>
            </table>
        </div>
)}
export default Table;

