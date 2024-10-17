// import { Form, FormSection, FormSubmit } from "../components/reusableForm";
import './About.css'

const About = () => {
    const name = "Programming Hero"
    const nameArr = name.split("");

    return (
        <div>
            {/* <Form>
                <FormSection>
                    <h1>this is formSection</h1>
                </FormSection>
                <FormSubmit>
                    <h1>this is form submit section</h1>
                </FormSubmit>
            </Form>
            <div className="border-2 box flex justify-center items-center">
                <div className="box1"></div>
            </div> */}

                <div className='main'>
                    <div className='loading'>
                        <div className='circle'></div>
                        <div className='square'></div>
                    </div>

                </div>
                <div className='h-screen bg-orange-400 flex justify-center items-center'>
                    <div className='text-6xl font-bold text-white text' >
                        {nameArr.map((items,i) => <>
                        <span key={i} style={{transitionDelay:`${i*30}ms`}}>{items}</span>
                        </>)}
                    </div>
                </div>



        </div>
    );
};

export default About;