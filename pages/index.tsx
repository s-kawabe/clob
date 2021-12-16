import useAspidaSWR from '@aspida/swr'
import { HStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import type { ChangeEvent, FormEvent } from 'react'
import { useCallback, useState } from 'react'

// import { useSetRecoilState } from 'recoil'
// import { TaskView } from '~/components/TaskView'
// import { todoListState } from '~/recoil/atom'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'

const TopPage: NextPage = () => {
  const { data: tasks, error, revalidate } = useAspidaSWR(apiClient.tasks)
  const [label, setLabel] = useState('')
  const inputLabel = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    return setLabel(e.target.value)
  }, [])
  // const setTodoList = useSetRecoilState<Task[]>(todoListState)

  const createTask = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      if (!label) return

      // const task = await apiClient.tasks.post({ body: { label } })
      // setTodoList((prev) => {
      //   return [...prev, task.body]
      // })
      setLabel('')
      revalidate()
    },
    [label]
  )

  const toggleDone = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).patch({ body: { done: !task.done } })
    // setTodoList((prev) => {
    //   return prev.filter((stateTask) => {
    //     return stateTask.id !== task.id
    //   })
    // })
    // setTodoList((prev) => {
    //   return [...prev, { id: task.id, label: task.label, done: !task.done }]
    // })
    revalidate()
  }, [])

  const deleteTask = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).delete()
    // setTodoList((prev) => {
    //   return prev.filter((stateTask) => {
    //     return stateTask.id !== task.id
    //   })
    // })
    revalidate()
  }, [])

  if (error) return <div>failed to load</div>
  if (!tasks) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>frourio-todo-app</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HStack spacing={20}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>frourio-todo-app</p>

          <div>
            <form style={{ textAlign: 'center' }} onSubmit={createTask}>
              <input value={label} type="text" onChange={inputLabel} />
              <input type="submit" value="ADD" />
            </form>
            <ul className={styles.tasks}>
              {tasks.map((task: Task) => {
                return (
                  <li key={task.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => {
                          return toggleDone(task)
                        }}
                      />
                      <span>{task.label}</span>
                    </label>
                    <input
                      type="button"
                      value="DELETE"
                      style={{ float: 'right' }}
                      onClick={() => {
                        return deleteTask(task)
                      }}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </main>
      </HStack>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default TopPage
