import { useState } from "react"
import { supabase } from '../lib/supabase'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { useAuthStore } from "~/lib/auth-store"
import type { Route } from "./+types/list"


export default function List() {
  const user = (4)(s => s.user)
  const queryClient = useQueryClient()
  const [title, setTitle] = useState("")

  const { data: (8) = [], isPending, isError, error
} = (9)({
  queryKey: ['(10)'],
    (11): async () => {
  const { data, error } = await supabase
    .from('(12)')
    .select('*')
  if (error) throw new Error(error.message)
  return data
},
  enabled: !!user,
  (13): 1000 * 60 * 5, 
  })

const mutate = (14)({
    (15)                                     : async (newTitle: string) => {
  const { data, error } = await supabase
    .from('(12)')
    .insert([{ title: newTitle }])
  if (error) throw new Error(error.message)
  return data
},
  onSuccess: () => {
    // 추가 성공 후, 캐시 무효화하여 refetch되도록 함
    queryClient.(16)({ queryKey: ['escape-to-do'] })

    // 입력 필드 초기화
    setTitle("")
  },
  onError: (err: any) => {
    alert(`추가 실패: ${err.message}`)
  }
  })

if (isPending) return <div>로딩 중...</div>

if (isError) return <div>에러: {error.message}</div>

if (myList.length == 0)
  return <div>하고 싶은 일이 없습니다.</div>

return (
  <>
    <form className="m-2 p-4 border flex justify-between"
      onSubmit={e => {
        e.(17)() // 버튼 눌렸을 때 새로고침 되는 것 금지 명령
          (18).mutate(title)
      }}>
      <input
        type="text"
        value={title}
        placeholder="하고 싶은 일 (*)"
        onChange={e => setTitle(e.target.value)}
        required
        className="w-full" />
      <button
        type="submit"
        disabled={mutate.isPending}
        className="shrink-0 p-2 bg-violet-600">
        추가
      </button>
    </form>
    <div className="p-4 space-y-2">
      {myList.(19)((p: any) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  </>
)
}
