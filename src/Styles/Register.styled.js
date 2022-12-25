import styled from "styled-components";

export const StyledRegisterTitle = styled.h2({

    display: 'flex',
    // flex: "0 0  30%",
    margin: '-10px 0 0 0',
    color: "royalblue",
    backgroundColor: "black",
    justifyContent: "space-around",
    paddingBlockStart: "37px",
    
    
    })
    
    export const StyledNewUser = styled.h2`
    display: flex;
    color: royalblue;
    justify-content: center;
    
    
    `
    export const StyledRegisterButton = styled.button({
    
        display: 'flex',
        color: "lightgreen",
        backgroundColor: "blueviolet",
        "&:hover":{
            color:  'white',
            backgroundColor:'black',
            
            
    }
        
        })
    
        export const StyledRegisterForm = styled.form({
    
            color: "black",
            backgroundColor: "skyblue",
            alignSelf:"self-end",
            margin: "1px 320px ",
            border: "7px solid black",
            padding: "40px ",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "430px",

            
    
            
            })
            export const StyledRegister = styled.div({
    
                color: "black",
                backgroundColor: "lavender",
                alignSelf:"self-end",
                border: "7px solid gray",
                padding: "10px",
                justifyContent: "center",
                maxWidth: "auto",
                width: "fit-content",
                
        
                
                })
                
            export const StyledRegisterErrorMessge = styled.p({

                color: "black",
                backgroundColor: "red",
                // alignSelf:"self-end",
                padding: "10px",
                width: "auto",
                
        
                
                })
                export const StyledRegisterUsernameTxt= styled.p({

                    color: "black",
                    backgroundColor: "red",
                    // alignSelf:"self-end",
                    // padding: "10px",
                    width: "auto",
                    margin: "10px 0 5 0",
                    
                    "&:instructions":{
                        marginRight: "0.25rem",
                    
                    },
                    "&:offscreen":{
                        position: "absolute",
                        left: "-9999px",
                    
                    }
                    
                    })
                    export const StyledRegisterPasswordTxt= styled.p({

                        color: "black",
                        backgroundColor: "red",
                        // alignSelf:"self-end",
                        // padding: "10px",
                        width: "auto",
                        margin: "10px 0 5 0",
                        
                        "&:instructions":{
                            marginRight: "0.25rem",
                        
                        },
                        "&:offscreen":{
                            position: "absolute",
                            left: "-9999px",
                        
                        }
                        
                        })
    

                    export const StyledRegisterLabelValid= styled.span({

                        color: "limegreen",
                        // backgroundColor: "red",
                        // alignSelf:"self-end",
                        // padding: "10px",
                        
                // "&:valid":{
                //     color: "limegreen",
                //     marginLeft:' 0.25rem',

                // },
                // "&:hide":{

                //     display: "none",
                // }
                        
                        })
                        export const StyledRegisterLabelPasswordValid= styled.span({

                            color: "limegreen",
                            // backgroundColor: "red",
                            // alignSelf:"self-end",
                            // padding: "10px",
                            
                    // "&:valid":{
                    //     color: "limegreen",
                    //     marginLeft:' 0.25rem',
    
                    // },
                    // "&:hide":{
    
                    //     display: "none",
                    // }
                            
                            })

                        export const StyledRegisterLabelInvalid= styled.span({

                            color: "red",
                            // backgroundColor: "red",
                            // alignSelf:"self-end",
                            // padding: "10px",
                            width: "auto",
                            
                    
                            
                            })

                            export const StyledRegisterPasswordSymbols = styled.span({

                                // backgroundColor: "red",
                                // alignSelf:"self-end",
                                // padding: "10px",
                                width: "auto",
                                
                        
                                
                                })