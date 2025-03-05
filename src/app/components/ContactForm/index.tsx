import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ContactForm() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendEmail = async () => {
    const { name, email, message } = formData;
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);

    const response = axios.postForm('/api/send-email', {
        'files[]': (document.getElementById('photo') as HTMLInputElement)?.files,
        'formData': data
      }
    );

    return response;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendEmail();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const allowDrop = (e: any) => {
    e.preventDefault();
  };

const handleDrop = (e: any) => {
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = dt.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function () {
        const output = document.getElementById('image');
        output!.appendChild(document.createElement('img')).src =
            reader.result as string;
    };
  };

  useEffect(() => {
    document.getElementById('other')?.addEventListener('change', () => {
        document.getElementById('substrate')!.style.display =
            document.getElementById('substrate')?.style.display === 'block'
                ? 'none'
                : 'block';
    });
  }, []);

    return (
        <>
            <form className="flex flex-col items-center gap-8 text-pretty">
                <h2>Tell us about your project</h2>
                <div className="flex flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-sm border-black rounded-sm breadtext"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-sm border-black rounded-sm breadtext"
                    />
                </div>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    className="w-full p-sm border-black rounded-sm breadtext"
                ></textarea>
                <h3 className="pt-md">
                    Do you reqire any of these options?
                </h3>
                <div className="w-full flex flex-wrap justify-center gap-8">
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            name="cooling"
                            id="cooling"
                            className="size-4"
                        />
                        <label htmlFor="cooling" className="px-1">
                            Cooling
                        </label>
                    </div>
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            name="heating"
                            id="heating"
                            className="size-4"
                        />
                        <label htmlFor="heating" className="px-1">
                            Heating
                        </label>
                    </div>
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            name="winterizing"
                            id="winterizing"
                            className="size-4"
                        />
                        <label htmlFor="winterizing" className="px-1">
                            Winterizing
                        </label>
                    </div>
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            name="gutter"
                            id="gutter"
                            className="size-4"
                        />
                        <label htmlFor="gutter" className="px-1">
                            Gutter solutions
                        </label>
                    </div>
                </div>
                <h3 className="pt-md">
                    What are your ground conditions like?
                </h3>
                <div className="w-full flex flex-wrap justify-center gap-8">
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            name="concrete"
                            id="concrete"
                            className="size-4"
                        />
                        <label htmlFor="concrete" className="px-1">
                            Concrete
                        </label>
                    </div>
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            name="dirt"
                            id="dirt"
                            className="size-4"
                        />
                        <label htmlFor="dirt" className="px-1">
                            Dirt
                        </label>
                    </div>
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            name="sand"
                            id="sand"
                            className="size-4"
                        />
                        <label htmlFor="sand" className="px-1">
                            Sand
                        </label>
                    </div>
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            name="other"
                            id="other"
                            className="size-4"
                        />
                        <label htmlFor="other" className="px-1">
                            Other
                        </label>
                    </div>
                </div>
                <input
                    type="text"
                    name="substrate"
                    id="substrate"
                    placeholder="Description"
                    className="p-sm"
                    hidden
                />
                <h3 className="pt-md">What are your dimensions?</h3>
                <div className="w-full flex flex-wrap justify-center gap-8">
                    <input
                        type="text"
                        name="dimensions"
                        id="dimensions"
                        placeholder="Approx. sq feet x height range"
                        className="w-1/2 p-sm border-black rounded-sm breadtext"
                    ></input>
                </div>
                <h3 className="pt-md">Upload a photo of your space</h3>
                <div className="w-full flex flex-col items-center">
                    <div
                        className="bg-background p-md border-gray border-dotted border-2"
                        onDrop={(e) => handleDrop(e)}
                        onDragOver={(e) => allowDrop(e)}
                    >
                        <input
                            type="file"
                            id="photo"
                            name="filename"
                            placeholder="'Choose file or drop a file"
                        />
                    </div>
                    <div
                        id="image"
                        className="w-2/3 flex flex-wrap gap-4 p-md"
                    ></div>
                </div>
                <input
                    type="submit"
                    value="Submit"
                    className="w-fit text-[1.8em] tracking-wide bg-secondary/50 text-center px-md py-sm transition-all duration-500 shadow-[4px_4px_0_0_#171717] hover:shadow-[-4px_-4px_0_0_#171717] bg-gray hover:bg-primary hover:cursor-pointer"
                />
            </form>
        </>
    );
};
