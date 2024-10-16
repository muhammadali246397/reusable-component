import {  FieldValues, useForm } from "react-hook-form";

const SignUp = () => {
    const { register,handleSubmit } = useForm()

    const dataSubmit = (data : FieldValues) => {
        console.log(data)
    }


    return (
        <div className="max-w-5xl border border-red-500 mb-10 rounded-md p-3 mx-auto">
            <form onClick={handleSubmit(dataSubmit)} >
                <div className="grid md:grid-cols-2 gap-4 p-5">
                    <div>
                        <label className="block text-lg" htmlFor="name">Name</label>
                        <input
                            className="border-2 w-full shadow-sm border-purple-500 p-2 rounded-md mt-2"
                            type="text"
                            placeholder=" name"
                            {...register("Name")} />
                    </div>
                    <div>
                        <label className="block text-lg" htmlFor="name">Email</label>
                        <input
                            className="border-2 w-full shadow-sm border-purple-500 p-2 rounded-md mt-2 focus:border-purple-600"
                            type="text"
                            placeholder=" Email"
                            {...register("email")} />
                    </div>
                    <div>
                        <label className="block text-lg" htmlFor="name">Password</label>
                        <input
                            className="border-2 w-full shadow-sm border-purple-500 p-2 rounded-md mt-2"
                            type="text"
                            placeholder=" password"
                            {...register("password")} />
                    </div>
                    <div>
                        <label className="block text-lg" htmlFor="name">Image</label>
                        <input
                            className="border-2 w-full shadow-sm border-purple-500 p-2 rounded-md mt-2"
                            type="text"
                            placeholder=" Image"
                            {...register("image")} />
                    </div>
                    

                </div>
                <div className="p-5">
                    <button className="px-4 py-2 border shadow-sm border-purple-600 rounded-md" type="submit">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default SignUp;