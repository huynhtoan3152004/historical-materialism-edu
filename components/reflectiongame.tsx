"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Trophy, Send } from "lucide-react"

interface Reflection {
  id: string
  name: string
  content: string
  votes: number
  timestamp: Date
}

export function ReflectionGame() {
  const [reflections, setReflections] = useState<Reflection[]>([])
  const [newReflection, setNewReflection] = useState("")
  const [userName, setUserName] = useState("")
  const [hasVoted, setHasVoted] = useState<Set<string>>(new Set())
  const [showForm, setShowForm] = useState(false)

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("reflections")
    if (saved) {
      setReflections(JSON.parse(saved))
    }
    const votedIds = localStorage.getItem("votedReflections")
    if (votedIds) {
      setHasVoted(new Set(JSON.parse(votedIds)))
    }
  }, [])

  // Save data to localStorage
  const saveData = (newReflections: Reflection[], newVotedIds: Set<string>) => {
    localStorage.setItem("reflections", JSON.stringify(newReflections))
    localStorage.setItem("votedReflections", JSON.stringify([...newVotedIds]))
  }

  const submitReflection = () => {
    if (!newReflection.trim() || !userName.trim()) return

    const reflection: Reflection = {
      id: Date.now().toString(),
      name: userName.trim(),
      content: newReflection.trim(),
      votes: 0,
      timestamp: new Date()
    }

    const updated = [...reflections, reflection]
    setReflections(updated)
    saveData(updated, hasVoted)
    setNewReflection("")
    setUserName("")
    setShowForm(false)
  }

  const vote = (id: string) => {
    if (hasVoted.has(id)) return

    const updated = reflections.map(r => 
      r.id === id ? { ...r, votes: r.votes + 1 } : r
    )
    const newVotedIds = new Set([...hasVoted, id])
    
    setReflections(updated)
    setHasVoted(newVotedIds)
    saveData(updated, newVotedIds)
  }

  const topReflections = [...reflections]
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3)

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            💭 Chia sẻ cảm nhận của bạn
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Sau khi trải nghiệm website, bạn có những suy nghĩ gì về chủ nghĩa duy vật lịch sử?
          </p>
          <Button 
            onClick={() => setShowForm(!showForm)}
            className="bg-red-600 hover:bg-red-700"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chia sẻ cảm nhận
          </Button>
        </div>

        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Viết cảm nhận của bạn</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Tên của bạn"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Textarea
                placeholder="Chia sẻ những gì bạn học được, cảm nhận về chủ nghĩa duy vật lịch sử..."
                value={newReflection}
                onChange={(e) => setNewReflection(e.target.value)}
                rows={4}
              />
              <div className="flex gap-2">
                <Button onClick={submitReflection}>
                  <Send className="w-4 h-4 mr-2" />
                  Gửi
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Hủy
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {topReflections.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
              Top cảm nhận được yêu thích nhất
            </h3>
            <div className="grid gap-4">
              {topReflections.map((reflection, index) => (
                <Card key={reflection.id} className={`
                  ${index === 0 ? 'border-yellow-400 bg-yellow-50' : ''}
                  ${index === 1 ? 'border-gray-400 bg-gray-50' : ''}
                  ${index === 2 ? 'border-orange-400 bg-orange-50' : ''}
                `}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{reflection.name}</span>
                        {index < 3 && (
                          <Badge variant={index === 0 ? "default" : "secondary"}>
                            {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                          </Badge>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => vote(reflection.id)}
                        disabled={hasVoted.has(reflection.id)}
                        className="flex items-center gap-1"
                      >
                        <Heart 
                          className={`w-4 h-4 ${hasVoted.has(reflection.id) ? 'fill-red-500 text-red-500' : ''}`} 
                        />
                        {reflection.votes}
                      </Button>
                    </div>
                    <p className="text-gray-700">{reflection.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-4">
          {reflections
            .filter(r => !topReflections.find(tr => tr.id === r.id))
            .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
            .map((reflection) => (
            <Card key={reflection.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold">{reflection.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => vote(reflection.id)}
                    disabled={hasVoted.has(reflection.id)}
                    className="flex items-center gap-1"
                  >
                    <Heart 
                      className={`w-4 h-4 ${hasVoted.has(reflection.id) ? 'fill-red-500 text-red-500' : ''}`} 
                    />
                    {reflection.votes}
                  </Button>
                </div>
                <p className="text-gray-700">{reflection.content}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(reflection.timestamp).toLocaleString('vi-VN')}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {reflections.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            Chưa có cảm nhận nào. Hãy là người đầu tiên chia sẻ!
          </div>
        )}
      </div>
    </section>
  )
}