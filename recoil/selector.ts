// import { selector } from 'recoil'

// import { todoListState } from '~/recoil/atom'
// import { SelectorKeys } from '~/recoil/key'
// import type { Task } from '$prisma/client'

// const extractTask = (tasks: Task[], isDone: boolean): Task[] => {
//   return tasks.filter((task) => {
//     return task.done === isDone
//   })
// }

// export const todoListDoneSelector = selector<Task[]>({
//   key: SelectorKeys.TODO_LIST_DONE_SELECTOR,
//   get: ({ get }) => {
//     return extractTask(get(todoListState), true)
//   }
// })

// export const todoListProgressSelector = selector<Task[]>({
//   key: SelectorKeys.TODO_LIST_PROGRESS_SELECTOR,
//   get: ({ get }) => {
//     return extractTask(get(todoListState), false)
//   }
// })
