"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, XCircle, RotateCcw, Sparkles } from "lucide-react"
import { siteData } from "@/lib/data"
import { useLanguage } from "@/hooks/use-language"

export function QuizDialog() {
  const { language } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])

  const quiz = siteData.quiz
  const question = quiz[currentQuestion]

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return // Already answered

    setSelectedAnswer(optionIndex)
    const isCorrect = question.options[optionIndex].correct
    const newAnswers = [...answers, isCorrect]
    setAnswers(newAnswers)

    if (isCorrect) {
      setScore(score + 1)
    }

    // Auto-advance after 2 seconds
    setTimeout(() => {
      if (currentQuestion < quiz.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="border-[#b51e1e] text-[#b51e1e] hover:bg-[#b51e1e] hover:text-white bg-transparent"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {language === "vi" ? siteData.hero.ctaSecondary : siteData.hero.ctaSecondaryEn}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            {language === "vi" ? "Tự kiểm tra hiểu biết" : "Self-Assessment Quiz"}
          </DialogTitle>
          <DialogDescription>
            {language === "vi"
              ? "5 câu hỏi để kiểm tra hiểu biết về Chủ nghĩa duy vật lịch sử"
              : "5 questions to test your understanding of Historical Materialism"}
          </DialogDescription>
        </DialogHeader>

        {!showResult ? (
          <div className="space-y-6 pt-4">
            {/* Progress */}
            <div className="flex items-center justify-between">
              <Badge variant="outline">
                {language === "vi" ? "Câu" : "Question"} {currentQuestion + 1}/{quiz.length}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {language === "vi" ? "Điểm:" : "Score:"} {score}
              </span>
            </div>

            {/* Question */}
            <div>
              <h3 className="text-lg font-semibold mb-4 leading-relaxed">
                {language === "vi" ? question.question : question.questionEn}
              </h3>

              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrect = option.correct
                  const showFeedback = selectedAnswer !== null

                  return (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all ${
                        isSelected
                          ? isCorrect
                            ? "border-green-500 bg-green-50"
                            : "border-red-500 bg-red-50"
                          : showFeedback && isCorrect
                            ? "border-green-500 bg-green-50"
                            : "hover:border-[#b51e1e] hover:bg-[#b51e1e]/5"
                      } ${selectedAnswer !== null ? "pointer-events-none" : ""}`}
                      onClick={() => handleAnswer(index)}
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        <span className="text-sm">{language === "vi" ? option.text : option.textEn}</span>
                        {showFeedback && (
                          <>
                            {isSelected && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                            {isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-600" />}
                            {!isSelected && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                          </>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Explanation */}
            {selectedAnswer !== null && (
              <div className="p-4 bg-[#f0c240]/10 rounded-lg border-l-4 border-l-[#f0c240]">
                <p className="text-sm font-semibold mb-1">{language === "vi" ? "💡 Giải thích:" : "💡 Explanation:"}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "vi" ? question.explanation : question.explanationEn}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6 pt-4 text-center">
            <div className="p-8 bg-gradient-to-br from-[#b51e1e]/10 to-[#f0c240]/10 rounded-lg">
              <h3 className="font-serif text-3xl font-bold mb-2">{language === "vi" ? "Hoàn thành!" : "Complete!"}</h3>
              <p className="text-5xl font-bold text-[#b51e1e] mb-4">
                {score}/{quiz.length}
              </p>
              <p className="text-lg text-muted-foreground">
                {score === quiz.length
                  ? language === "vi"
                    ? "🎉 Xuất sắc! Bạn đã nắm vững kiến thức!"
                    : "🎉 Excellent! You've mastered the knowledge!"
                  : score >= 3
                    ? language === "vi"
                      ? "👍 Tốt! Hãy xem lại một số phần."
                      : "👍 Good! Review some sections."
                    : language === "vi"
                      ? "📚 Hãy đọc lại nội dung để hiểu rõ hơn."
                      : "📚 Review the content for better understanding."}
              </p>
            </div>

            {score < quiz.length && (
              <div className="p-4 bg-muted/50 rounded-lg text-left">
                <p className="text-sm font-semibold mb-2">{language === "vi" ? "💡 Gợi ý:" : "💡 Suggestions:"}</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    {language === "vi" ? "Xem lại phần Cơ sở lý luận" : "Review the Theoretical Foundation section"}
                  </li>
                  <li>{language === "vi" ? "Khám phá Ma trận tương tác" : "Explore the Interactive Matrix"}</li>
                  <li>
                    {language === "vi"
                      ? "Đọc các ví dụ lịch sử trong Timeline"
                      : "Read historical examples in the Timeline"}
                  </li>
                </ul>
              </div>
            )}

            <Button onClick={resetQuiz} className="w-full bg-[#b51e1e] hover:bg-[#8b1616]">
              <RotateCcw className="mr-2 h-4 w-4" />
              {language === "vi" ? "Làm lại" : "Retry"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
