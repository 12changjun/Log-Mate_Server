export default function KanbanPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📋 칸반 보드</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6">
          <div className="text-sm font-medium text-yellow-600 mb-4">To Do</div>
          <div className="space-y-4">여기에 할 일 카드가 들어갑니다</div>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <div className="text-sm font-medium text-blue-600 mb-4">In Progress</div>
          <div className="space-y-4">진행 중인 업무</div>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <div className="text-sm font-medium text-green-600 mb-4">Done</div>
          <div className="space-y-4">완료된 업무</div>
        </div>
      </div>
    </div>
  );
}
