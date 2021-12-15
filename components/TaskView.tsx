// import { useRecoilValue } from 'recoil'

// import {
//   todoListDoneSelector,
//   todoListProgressSelector
// } from '~/recoil/selector'

// export const TaskView = () => {
//   const doneTasks = useRecoilValue(todoListDoneSelector)
//   const progressTasks = useRecoilValue(todoListProgressSelector)

//   return (
//     <div>
//       <h1>done</h1>
//       <ul>
//         {doneTasks.map((task) => {
//           return <p key={task.id}>{task.label}</p>
//         })}
//       </ul>
//       <h2>progress</h2>
//       <ul>
//         {progressTasks.map((task) => {
//           return <p key={task.id}>{task.label}</p>
//         })}
//       </ul>
//     </div>
//   )
// }
