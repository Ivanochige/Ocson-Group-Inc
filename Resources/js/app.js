//HTML Template//
class MyNavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="navbar">
            <h1>Ocson Systems Inc</h1>
            <ul>
               <li>
                    <a>
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>
               </li>

                <li>
                    <a>
                        <i class="fa fa-bell" aria-hidden="true"></i>
                    </a>
               </li>

            </ul>
        </div>
        `
    }
}
customElements.define('my-navbar',MyNavbar)

class MySidebar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <aside class="sidebar">
            <ul>
                <li>
                    <a href="#dashboard" data-page="dashboard.html" class="active">
                        <i class="fa-solid fa-house"></i>
                        Dashboard
                    </a>
                </li>

                <li>
                    <a href="#inventory" data-page="inventory.html">
                        <i class="fa-solid fa-box"></i>
                        Inventory
                    </a>
    
                </li>

                <li>
                    <a href="#suppliers" data-page="suppliers.html">
                        <i class="fa-solid fa-truck"></i>
                        Suppliers
                    </a>
                </li>

                <li>
                    <a href="#customers" data-page="customers.html">
                        <i class="fa-solid fa-users"></i>
                        Customers
                    </a>
                </li>

                <li>
                    <a href="#purchases" data-page="purchases.html">
                        <i class="fa-solid fa-shopping-cart"></i>
                        Purchases
                    </a>
                </li>


                <li>
                    <a href="#sales" data-page="sales.html">
                        <i class="fa-solid fa-tag"></i>
                        Sales
                    </a>
                </li>
                
                <li>
                    <a href="#receipts" data-page="receipts.html">
                        <i class="fa-solid fa-receipt"></i>
                        Receipts
                    </a>
                </li>

                <li>
                    <a href="#payments" data-page="payments.html">
                        <i class="fa-solid fa-credit-card"></i>
                        Payments
                    </a>
                </li>

                <li>
                    <a href="#users" data-page="users.html">
                        <i class="fa-solid fa-users"></i>
                        Users
                    </a>
                </li>

                <li>
                    <a href="#reports" data-page="reports.html">
                        <i class="fa-solid fa-chart-bar"></i>
                        Reports
                    </a>
                </li>
            </ul>

       </aside>
        `
    }
}
customElements.define('my-sidebar',MySidebar)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="copyright">
             <p>Ocson Group Inc | &copy; 2026</p>
        </div>
        `
    }
}
customElements.define('my-footer',MyFooter)
//End of template//