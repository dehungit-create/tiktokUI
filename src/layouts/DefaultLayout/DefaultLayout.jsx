import Header from "@/layouts/Header/Header";
import SideBar from "@/layouts/SideBar/SideBar";

function DefaultLayout({ children }) {
  return ( 
    <div>
      <Header/>
      <div className="container">
        <SideBar/>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
   );
}

export default DefaultLayout;