"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Users, Target, BookOpen, Zap, Heart } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function YouthInsights() {
  const { language } = useLanguage()
  
  const insights = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: language === "vi" ? "Tư duy phản biện" : "Critical Thinking",
      description: language === "vi" 
        ? "Học cách nhìn nhận sự vật từ nhiều góc độ khác nhau, không chấp nhận mọi thứ một cách máy móc."
        : "Learn to view things from multiple perspectives, don't accept everything mechanically.",
      practical: language === "vi" 
        ? "Đặt câu hỏi 'Tại sao?' với mọi hiện tượng xã hội bạn gặp phải."
        : "Ask 'Why?' questions about every social phenomenon you encounter."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: language === "vi" ? "Ý thức tập thể" : "Collective Consciousness",
      description: language === "vi"
        ? "Hiểu rằng cá nhân tồn tại trong mối quan hệ xã hội, thành công cá nhân gắn liền với phát triển chung."
        : "Understand that individuals exist in social relationships, personal success is linked to collective development.",
      practical: language === "vi"
        ? "Tham gia các hoạt động cộng đồng, tình nguyện vì lợi ích chung."
        : "Participate in community activities, volunteer for common interests."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: language === "vi" ? "Mục tiêu rõ ràng" : "Clear Goals",
      description: language === "vi"
        ? "Xác định được vai trò và vị trí của bản thân trong xã hội, có định hướng phát triển bền vững."
        : "Identify your role and position in society, have sustainable development direction.",
      practical: language === "vi"
        ? "Đặt mục tiêu học tập/công việc phục vụ nhu cầu phát triển xã hội."
        : "Set learning/work goals that serve social development needs."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: language === "vi" ? "Học tập suốt đời" : "Lifelong Learning",
      description: language === "vi"
        ? "Thế giới thay đổi không ngừng, cần liên tục cập nhật kiến thức để thích ứng."
        : "The world is constantly changing, need to continuously update knowledge to adapt.",
      practical: language === "vi"
        ? "Đọc sách, tìm hiểu về các vấn đề xã hội đương đại."
        : "Read books, learn about contemporary social issues."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: language === "vi" ? "Hành động thực tiễn" : "Practical Action",
      description: language === "vi"
        ? "Không chỉ nói suông mà phải có hành động cụ thể để góp phần thay đổi tích cực."
        : "Not just empty talk but concrete actions to contribute to positive change.",
      practical: language === "vi"
        ? "Tham gia các dự án xã hội, khởi nghiệp vì cộng đồng."
        : "Participate in social projects, start businesses for the community."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: language === "vi" ? "Lòng nhân ái" : "Compassion",
      description: language === "vi"
        ? "Quan tâm đến những người khó khăn, bất công xã hội và có trách nhiệm góp sức thay đổi."
        : "Care about those in difficulty, social injustice and take responsibility to contribute to change.",
      practical: language === "vi"
        ? "Hỗ trợ những người có hoàn cảnh khó khăn trong khả năng của mình."
        : "Support those in difficult circumstances within your ability."
    }
  ]

  const applications = [
    {
      situation: language === "vi" ? "Khi chọn nghề nghiệp" : "When choosing a career",
      approach: language === "vi"
        ? "Không chỉ xem lương cao hay thấp, mà xem nghề đó có đóng góp gì cho xã hội, có phù hợp với xu hướng phát triển không."
        : "Don't just look at high or low salary, but see what the profession contributes to society, whether it fits development trends."
    },
    {
      situation: language === "vi" ? "Khi gặp bất công" : "When facing injustice",
      approach: language === "vi"
        ? "Tìm hiểu nguyên nhân sâu xa, không chỉ phàn nàn mà tìm cách hành động tích cực để thay đổi."
        : "Understand the root causes, not just complain but find ways to take positive action for change."
    },
    {
      situation: language === "vi" ? "Khi học tập" : "When studying",
      approach: language === "vi"
        ? "Liên kết kiến thức với thực tiễn, hiểu được ứng dụng của những gì mình học vào cuộc sống."
        : "Connect knowledge with practice, understand the application of what you learn to life."
    },
    {
      situation: language === "vi" ? "Khi sử dụng mạng xã hội" : "When using social media",
      approach: language === "vi"
        ? "Phân biệt thông tin đúng sai, không lan truyền tin giả, tạo nội dung tích cực."
        : "Distinguish true from false information, don't spread fake news, create positive content."
    }
  ]

  return (
    <section id="youth-insights" className="py-16 px-4 bg-gradient-to-br from-[#f7f6f3] to-[#f0c240]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#2e5e4e] text-white">
            {language === "vi" ? "Đúc kết cho thế hệ trẻ" : "Insights for Youth"}
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-4 text-[#2e5e4e]">
            🌟 {language === "vi" ? "Hành trang cho tương lai" : "Equipment for the Future"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            {language === "vi"
              ? "Chủ nghĩa duy vật lịch sử không chỉ là lý thuyết xa xôi mà là công cụ giúp bạn hiểu và thay đổi cuộc sống một cách tích cực."
              : "Historical materialism is not just a distant theory but a tool to help you understand and change life positively."
            }
          </p>
        </div>

        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold text-center mb-8 text-[#2e5e4e]">
            {language === "vi" ? "6 bài học quan trọng" : "6 Important Lessons"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-[#2e5e4e]/10 hover:border-[#2e5e4e]/30 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#2e5e4e]/10 rounded-lg text-[#2e5e4e]">
                      {insight.icon}
                    </div>
                    <CardTitle className="text-lg text-[#2e5e4e] font-serif">{insight.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="pt-2 border-t border-[#2e5e4e]/10">
                    <Badge variant="outline" className="mb-2 border-[#f0c240] text-[#2e5e4e]">
                      {language === "vi" ? "Thực hành" : "Practice"}
                    </Badge>
                    <p className="text-xs text-[#2e5e4e] font-medium">
                      {insight.practical}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold text-center mb-8 text-[#2e5e4e]">
            {language === "vi" ? "Ứng dụng trong cuộc sống hàng ngày" : "Applications in Daily Life"}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-[#2e5e4e]/10 hover:border-[#2e5e4e]/30 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-[#2e5e4e] mb-3 flex items-center font-serif">
                    <span className="w-8 h-8 bg-gradient-to-r from-[#2e5e4e] to-[#4a7c59] text-white rounded-full flex items-center justify-center text-sm mr-3 font-bold">
                      {index + 1}
                    </span>
                    {app.situation}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-11">
                    {app.approach}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[#2e5e4e] to-[#4a7c59] text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <h4 className="font-serif text-xl font-bold mb-4">💡 {language === "vi" ? "Thông điệp cuối" : "Final Message"}</h4>
              <p className="leading-relaxed text-white/90">
                {language === "vi"
                  ? "Chủ nghĩa duy vật lịch sử dạy chúng ta rằng bạn có thể thay đổi thế giới, bắt đầu từ việc thay đổi chính mình. Hãy là người trẻ có ý thức, có trách nhiệm và có hành động cụ thể vì một xã hội tốt đẹp hơn!"
                  : "Historical materialism teaches us that you can change the world, starting by changing yourself. Be a conscious, responsible young person with concrete actions for a better society!"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}