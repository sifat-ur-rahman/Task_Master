import { useForm } from "react-hook-form"
import Modal from "../Ui/Modal"
import { useDispatch } from "react-redux"
import { addTask } from "../../redux/features/tasks/tasksSlice"


function AddTasksModal({isOpen, setIsOpen}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  
  const dispatch = useDispatch()

  const onCancel=()=>{
    reset();
    setIsOpen(false)
  }

  const onSubmit = (data) => {
    
    dispatch(addTask(data))
    // console.log(data);
    reset();
    setIsOpen(false)
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

            <div className="flex flex-col mb-5 ">
              <label htmlFor="title">Deadline</label>
              <input className="w-full rounded-md" type="date" id="date" {...register("date")} />
              {errors.exampleRequired && <span>{errors}</span>}
            </div>

            <div className="flex flex-col mb-5 ">
              <label htmlFor="title">Assign To</label>
              <select  id="assignedTo" {...register("assignedTo")}>
              <option value="sifat">Sifat</option>
              <option value="mir">Mir</option>
              <option value="Mezba">Mezba</option>
              <option value="Fahim">Fahim</option>
              </select>
              {errors.exampleRequired && <span>{errors}</span>}
            </div>

            <div className="flex flex-col mb-5 ">
              <label htmlFor="title">Priority</label>
              <select  id="priority" {...register("priority")}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              
              </select>
              {errors.exampleRequired && <span>{errors}</span>}
            </div>
      
        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} type="button" className="btn btn-danger">Cancel</button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>
            </Modal>
  )
}

export default AddTasksModal