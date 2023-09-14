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
    
      <input defaultValue="test" {...register("example")} />

  
      <input {...register("exampleRequired", { required: true })} />
    
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
            </Modal>
  )
}

export default AddTasksModal