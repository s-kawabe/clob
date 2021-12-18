// import useAspidaSWR from '@aspida/swr'
import type { NextPage } from 'next'

import { TopPageComponent } from '@/components/page'

// import { apiClient } from '@/utils/apiClient'
// import { useSetRecoilState } from 'recoil'
// import { TaskView } from '~/components/TaskView'
// import { todoListState } from '~/recoil/atom'

const TopPage: NextPage = () => {
  // const { data: tasks, error, revalidate } = useAspidaSWR(apiClient.tasks)
  // const [tasks, setTasks] = useState('')
  // const inputLabel = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   return setLabel(e.target.value)
  // }, [])
  // const setTodoList = useSetRecoilState<Task[]>(todoListState)

  // const createTask = useCallback(
  //   async (e: FormEvent) => {
  //     e.preventDefault()
  //     if (!label) return

  //     // const task = await apiClient.tasks.post({ body: { label } })
  //     // setTodoList((prev) => {
  //     //   return [...prev, task.body]
  //     // })
  //     setLabel('')
  //     // revalidate()
  //   },
  //   [label]
  // )

  // const toggleDone = useCallback(async (task: Task) => {
  //   await apiClient.tasks._taskId(task.id).patch({ body: { done: !task.done } })
  //   setTodoList((prev) => {
  //     return prev.filter((stateTask) => {
  //       return stateTask.id !== task.id
  //     })
  //   })
  //   setTodoList((prev) => {
  //     return [...prev, { id: task.id, label: task.label, done: !task.done }]
  //   })
  //   revalidate()
  // }, [])

  // const deleteTask = useCallback(async (task: Task) => {
  // await apiClient.tasks._taskId(task.id).delete()
  // setTodoList((prev) => {
  //   return prev.filter((stateTask) => {
  //     return stateTask.id !== task.id
  //   })
  // })
  // revalidate()
  // }, [])

  // if (error) return <div>failed to load</div>
  // if (!tasks) return <div>loading...</div>

  return (
    <TopPageComponent />
    // <div className={styles.container}>
    //   <HStack spacing={20}>
    //     <main className={styles.main}>
    //       <h1 className={styles.title}>
    //         Welcome to <a href="https://nextjs.org">Next.js!</a>
    //       </h1>

    //       <p className={styles.description}>frourio-todo-app</p>

    //       <div>
    //         <form style={{ textAlign: 'center' }} onSubmit={createTask}>
    //           <input value={label} type="text" onChange={inputLabel} />
    //           <input type="submit" value="ADD" />
    //         </form>
    //         <ul className={styles.tasks}>
    //           {tasks.map((task: Task) => {
    //             return (
    //               <li key={task.id}>
    //                 <label>
    //                   <input
    //                     type="checkbox"
    //                     checked={task.done}
    //                     onChange={() => {
    //                       return toggleDone(task)
    //                     }}
    //                   />
    //                   <span>{task.label}</span>
    //                 </label>
    //                 <input
    //                   type="button"
    //                   value="DELETE"
    //                   style={{ float: 'right' }}
    //                   onClick={() => {
    //                     return deleteTask(task)
    //                   }}
    //                 />
    //               </li>
    //             )
    //           })}
    //         </ul>
    //       </div>
    //     </main>
    //   </HStack>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>
  )
}

export default TopPage
