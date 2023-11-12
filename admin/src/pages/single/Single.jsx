import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import Tables from "../../components/table/Table"


const Single = ()=>{
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://cdn-images-1.medium.com/max/737/1*8fpapH_ntoddzczjnVTAZA.jpeg" 
                            alt="" 
                            className="itemImg" 
                            />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemKey">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemKey">+593625</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemKey">Pajan 55</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemKey">Ecuador</span>
                                </div>

                            </div>
                        </div> 
                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title=" User Spending (Last 6 months)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <Tables/>
                </div>

            </div>
        </div>
    )
}

export default Single