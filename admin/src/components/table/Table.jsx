import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = ()=>{


const rows = [
  {
    id: 1143155,
    product: "Acer nitro",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495481629.jpg?k=497d80a60af090c87b0ae808983aee521043886b9b84084f5fa9c59c1c7f2e58&o=&hp=1",
    customer: "John Doe",
    date:"1 march",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
}, 
{
    id: 2235847,
    product: "Playstation 5",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495476134.jpg?k=084762ec2b7ac5b06d5a3a17245a30a99c0ef5da5373f88a88e336a5c20fc69f&o=&hp=1",
    customer: "John Black",
    date:"1 march",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",

}
];



    return (
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment method</TableCell>
            <TableCell className="tableCell">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>            
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Tables