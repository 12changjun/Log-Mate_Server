import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 회의 분석 시스템",
  description: "실시간 회의 → 자동 업무 할당",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 font-sans">
        <div className="flex h-screen">
          {/* 사이드바 */}
          <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-6 border-b">
              <h1 className="text-2xl font-bold text-blue-600">📋 MeetingAI</h1>
            </div>
            
            <nav className="flex-1 p-4 space-y-2">
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-medium">
                📊 대시보드
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100">
                🎤 회의 녹음
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100">
                📋 칸반 보드
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100">
                👥 팀 기여도
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100">
                ⚙️ 설정
              </a>
            </nav>
            
            <div className="p-4 border-t">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">신</div>
                <div>
                  <p className="font-medium">신윤철</p>
                  <p className="text-xs text-gray-500">팀장</p>
                </div>
              </div>
            </div>
          </div>

          {/* 메인 영역 */}
          <div className="flex-1 flex flex-col">
            <header className="h-14 border-b bg-white px-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">대시보드</h2>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-2xl text-sm font-medium flex items-center gap-2">
                  🎤 새 회의 시작
                </button>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </div>
            </header>

            <main className="flex-1 p-8 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
