import { FC } from "react";
import { useForm } from "react-hook-form";
import { IABTestFormData } from "../../types";

interface IProps {
  onSubmit: (data: IABTestFormData) => void;
}

const ABTestForm: FC<IProps> = ({ onSubmit }) => {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IABTestFormData>();

  const handleFormSubmit = (data: IABTestFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className="flex flex-col gap-4 items-start" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex gap-4">
        <label htmlFor="variation">Variation:</label>
        <input className="border rounded-md focus:outline-none" id="variation" {...register('variation', { required: true })} />
        {errors.variation && <span>This field is required</span>}
      </div>
      <div className="flex gap-4">
        <label htmlFor="blogTitle">Blog Title:</label>
        <input className="border rounded-md focus:outline-none" id="blogTitle" {...register('blogTitle', { required: true })} />
        {errors.blogTitle && <span>This field is required</span>}
      </div>
      <div className="flex gap-4">
        <label htmlFor="content">Content:</label>
        <textarea className="border rounded-md focus:outline-none" id="content" {...register('content', { required: true })} />
        {errors.content && <span>This field is required</span>}
      </div>
      <div className="flex gap-4">
        <label htmlFor="imgSrc">Image Source (URL):</label>
        <input className="border rounded-md focus:outline-none" id="imgSrc" type="url" {...register('imgSrc', { required: true })} />
        {errors.imgSrc && <span>This field is required</span>}
      </div>
      <div className="flex gap-4">
        <label htmlFor="ctaBtnText">CTA Button Text:</label>
        <input className="border rounded-md focus:outline-none" id="ctaBtnText" {...register('ctaBtnText', { required: true })} />
        {errors.ctaBtnText && <span>This field is required</span>}
      </div>
      <button className="bg-gray-200 rounded-md px-2 py-1 mt-3" type="submit">Submit A/B Test Configuration</button>
    </form>
  );
};

export default ABTestForm;
