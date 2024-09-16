import React from 'react'
import Header from '../Header'
import Button from '../Common/Button/Button'
import "./CreateAdd.css"
import bgImage from "../../assets/images/pexels-lilartsy-1213447.jpg"

function CreateAdd() {
    return (
        <>
            <div>
                <Header />
                <div className='mainContainer'>
                    <div className='childContainer'>
                        <img src={bgImage} alt="" style={{ alignSelf: "cover", }} className='bgImage' />
                    </div>

                    <div className='middleContainer'>
                        <div style={{ padding: "1rem" }}>
                            <h1 style={{ color: "white", textTransform: "uppercase" }}>Create a ad</h1>
                        </div>
                        <div style={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                            <Button title={"ADD"} width={"8rem"} height={"2rem"} />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CreateAdd