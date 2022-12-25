import React from 'react'


const UserInfo = () => {
  return (
 

    <>
    
          <section>

          <div id="sectionTop">
                <div class="topTxt">
                    <h1><span>User Account Settings</span> </h1>  
                </div>
            </div>             

            <div class="row">
                <div class="form col-6">
 <h2>Details</h2>
<form class="delivForm" method="POST">
                        
                        
                        <label>Name: </label>
                        <input type="Username" placeholder="Username" name="Username" required />
                          <br/>
                        
                        <label>Email: </label>
                        <input type="email" placeholder="Email" name="Email" required/><br/>
                        
                        <label>Today's Plastic bottles: </label>             
                        <input type="text" placeholder="today's" name="TPlastic" id="TPlastic"/><br/>
                        
                        <label>Total Plastic bottles: </label>
                        <input type="text" placeholder="total" name="totPLastic" id="totPLastic"/><br/>
                        
                        <label>amount in birr: </label>
                        <input type="number" placeholder="balance" name="balance" id="balance"/><br/>
                   
                    </form>
</div>

    </div>



          </section>
                    <footer>
        <div class="footer row">
            <address>
                call:<br/>
                +251911223344<br/>
                
            </address>
                <br/><br/>
                <p >Smart recycler   Copyright &copy; 2022/23, all rights reserved </p>
        </div>
    </footer>       
    
    </>
  )
}

export default UserInfo