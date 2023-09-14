import { useForm } from "react-hook-form"
import Modal from "../Ui/Modal"


function AddTasksModal({isOpen, setIsOpen}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'sifat'}>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="flex flex-col mb-5  ">
              <label htmlFor="title">Title</label>
              <input className="w-full rounded-md" type="text" id="title" {...register("name")} />
              {errors.exampleRequired && <span>{errors}</span>}
            </div>

            <div className="flex flex-col mb-5 ">
              <label htmlFor="title">Description</label>
              <input className="w-full rounded-md" type="text" id="description" {...register("description")} />
              {errors.exampleRequired && <span>{errors}</span>}
            </div>
      
        <div className="flex mt-5">
      <input className="btn btn-danger " type="submit" />
      <input className="btn btn-primary " type="submit" />
        </div>
    </form>
            </Modal>
  )
}

export default AddTasksModal