import styled from "styled-components";

export const StyledLoginTitle = styled.h1({

display: 'flex',
color: "lightgreen",
backgroundColor: "green",
justifyContent: "space-around",
margin: "0 0 0 0",

})

export const StyledNewUser = styled.h2`
display: flex;
color: royalblue;
justify-content: center;


`
export const StyledLoginButton = styled.button({

    display: 'flex',
    color: "green",
    backgroundColor: "lightgreen",
    "&:hover":{
        color:  'white',
        backgroundColor:'black',
        
        
}
    
    })

    export const StyledUserGroup = styled.div({

        color: "black",
        backgroundColor: "yellowgreen",
        border: "5px solid green",
        // alignSelf:"self-end",
        margin: "10px 280px",
        padding: "20px 40px",
       alignItems: "center",
       width:"auto",
        

        
        })
        
    export const StyledLoginForm = styled.form({

        color: "black",
        backgroundColor: "yellowgreen",
        border: "5px solid green",
        // alignSelf:"self-end",
        margin: "10px 280px",
        padding: "20px 40px",
       alignItems: "center",
       width:"auto",
        

        
        })

        export const StyledUserInfo = styled.section({
            display: "flex",
            flexDirection: "column",
            flex: "0 1 100%",
          
            backgroundColor: "lavender",
            // alignSelf:"self-end",
          

    
            })

            export const StyledLoginErrorMessge = styled.p({

                color: "black",
                backgroundColor: "pink",
                // alignSelf:"self-end",
                margin: "5px 120px",
                padding: "10px",
                width: "auto",
                borderBottomStyle: "solid",
                
        
                
                })