import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register } = useForm()


    return (
        <div className="max-w-5xl border border-red-500 mb-10 p-3 mx-auto">
            <form >
                <div className="grid grid-cols-2 gap-4 p-5">
                    <div>
                        <label className="block text-lg" htmlFor="name">Name</label>
                        <input
                            className="border-2 w-full border-purple-500 p-2 rounded-md mt-2"
                            type="text"
                            placeholder=" name"
                            {...register("Name")} />
                    </div>
                    <div>
                        <label className="block text-lg" htmlFor="name">Email</label>
                        <input
                            className="border-2 w-full border-purple-500 p-2 rounded-md mt-2 focus:border-purple-600"
                            type="text"
                            placeholder=" Email"
                            {...register("email")} />
                    </div>
                    <div>
                        <label className="block text-lg" htmlFor="name">Password</label>
                        <input
                            className="border-2 w-full border-purple-500 p-2 rounded-md mt-2"
                            type="text"
                            placeholder=" password"
                            {...register("password")} />
                    </div>
                    <div>
                        <label className="block text-lg" htmlFor="name">Image</label>
                        <input
                            className="border-2 w-full border-purple-500 p-2 rounded-md mt-2"
                            type="text"
                            placeholder=" Image"
                            {...register("image")} />
                    </div>
                    

                </div>

            </form>
        </div>
    );
};

export default SignUp;