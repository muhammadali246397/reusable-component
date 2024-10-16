import { Form, FormSection, FormSubmit } from "../components/reusableForm";


const About = () => {
    return (
        <div>
            <Form>
                <FormSection>
                    <h1>this is formSection</h1>
                </FormSection>
                <FormSubmit>
                    <h1>this is form submit section</h1>
                </FormSubmit>
            </Form>
        </div>
    );
};

export default About;