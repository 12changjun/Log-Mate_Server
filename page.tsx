export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm border">
          <p className="text-gray-500 text-sm">이번 주 회의</p>
          <p className="text-5xl font-bold text-blue-600 mt-2">7</p>
          <p className="text-green-500 text-sm mt-4">↑ 2회 (지난주 대비)</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border">
          <p className="text-gray-500 text-sm">자동 할당된 업무</p>
          <p className="text-5xl font-bold text-blue-600 mt-2">12</p>
          <p className="text-green-500 text-sm mt-4">완료율 83%</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border">
          <p className="text-gray-500 text-sm">팀 평균 기여도</p>
          <p className="text-5xl font-bold text-blue-600 mt-2">92%</p>
          <p className="text-gray-500 text-sm mt-4">무임승차 0명 🎉</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-6 mb-8">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          📋 오늘의 Action Items (칸반 보드)
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-2xl">
            <div className="text-xs bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full inline-block mb-2">To Do</div>
            <p className="font-medium">시장 조사 보고서 작성</p>
            <p className="text-sm text-gray-500">담당: 김팀원 • 마감: 3/30</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl">
            <div className="text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded-full inline-block mb-2">In Progress</div>
            <p className="font-medium">STT 모델 테스트</p>
            <p className="text-sm text-gray-500">담당: 신윤철 • 마감: 3/28</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl">
            <div className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded-full inline-block mb-2">Done</div>
            <p className="font-medium">회의록 자동 생성</p>
            <p className="text-sm text-gray-500">담당: 이팀원 • 완료</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-6">
        <h3 className="font-semibold mb-4">👥 팀 기여도 대시보드</h3>
        <div className="grid grid-cols-4 gap-6">
          {["신윤철", "김팀원", "박팀원", "이팀원"].map((name, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                {name[0]}
              </div>
              <p className="mt-3 font-medium">{name}</p>
              <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${85 + i * 3}%` }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{85 + i * 3}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}