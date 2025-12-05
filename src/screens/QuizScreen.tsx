import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

type QuizStep = 'topic' | 'difficulty' | 'feedback';

interface Topic {
  id: string;
  name: string;
}

const TOPICS: Topic[] = [
  { id: '1', name: 'My Best Friend' },
  { id: '2', name: 'Cricket Basics' },
  { id: '3', name: 'Solar System' },
  { id: '4', name: 'Healthy Habits' },
  { id: '5', name: 'Animals & Birds' },
  { id: '6', name: 'School Picnic' },
];

const DIFFICULTY_LEVELS = [
  {
    id: 'easy',
    name: 'Easy',
    description: 'Short sentences, simple vocabulary.',
    icon: '✓',
    color: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
  },
  {
    id: 'medium',
    name: 'Medium',
    description: 'Everyday situations with detail.',
    icon: '⚡',
    color: 'bg-orange-50',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
  },
  {
    id: 'hard',
    name: 'Hard',
    description: 'Longer thinking and tricky choices.',
    icon: '●',
    color: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
  },
];

export function QuizScreen({ onBack }: { onBack?: () => void } = {}) {
  const [step, setStep] = useState<QuizStep>('topic');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const handleBack = () => {
    if (step === 'feedback') {
      setStep('topic');
    } else {
      onBack?.();
    }
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
  };

  const handleGenerateQuiz = () => {
    setStep('feedback');
  };

  const selectedTopicName = TOPICS.find((t) => t.id === selectedTopic)?.name;
  const selectedDifficultyName = DIFFICULTY_LEVELS.find((d) => d.id === selectedDifficulty)?.name;

  return (
    <div className="h-full flex flex-col bg-gray-50 animate-fade-in pb-24">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => {
              if (step === 'topic') {
                onBack?.();
              } else {
                handleBack();
              }
            }}
            className="text-teal-600 font-medium text-sm flex items-center gap-1"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-teal-100 px-2 py-1 rounded text-[10px] font-bold text-teal-700 uppercase">
            LEARN TAB
          </div>
        </div>
      </div>

      {/* Main Content: show both STEP 1 and STEP 2 together (unless feedback) */}
      {step !== 'feedback' && (
        <div className="flex-1 px-6 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Craft a custom quiz</h1>
          <p className="text-sm text-gray-600 mb-8">
            Pick a topic, choose difficulty, and we will build four fun questions instantly.
          </p>

          {/* Progress Indicators */}
          <div className="flex gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold text-sm flex items-center justify-center">
                ✓
              </div>
              <span className="text-xs font-medium text-gray-700">AI Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-sm flex items-center justify-center">
                2
              </div>
              <span className="text-xs font-medium text-gray-500">Questions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-sm flex items-center justify-center">
                3
              </div>
              <span className="text-xs font-medium text-gray-500">Instant play</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Step 1: Choose Topic */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                <span className="text-gray-400">STEP 1</span>
                <br />
                Choose a topic
              </h2>
              <p className="text-xs text-gray-500 mb-4">e.g. "My school day" or "Planets in space"!</p>

              <div className="flex flex-wrap gap-3">
                {TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicSelect(topic.id)}
                    className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-shadow whitespace-normal shadow-sm ${
                      selectedTopic === topic.id
                        ? 'bg-teal-50 border-2 border-teal-300 text-teal-700'
                        : 'bg-gray-100 text-gray-800 hover:shadow-md'
                    }`}
                    style={{ maxWidth: '220px' }}
                  >
                    {topic.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pick Challenge Level */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                <span className="text-gray-400">STEP 2</span>
                <br />
                Pick a challenge level
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                Selected topic: <span className="font-bold text-gray-900">{selectedTopicName ?? '—'}</span>
              </p>

              <div className="space-y-3 mb-6">
                {DIFFICULTY_LEVELS.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedDifficulty(level.id)}
                    className={`w-full p-4 rounded-lg border-2 transition ${
                      selectedDifficulty === level.id
                        ? `${level.color} border-teal-500 bg-opacity-50`
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${
                          selectedDifficulty === level.id
                            ? `${level.textColor} bg-white`
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {level.icon}
                      </div>
                      <div className="text-left">
                        <p className={`font-bold text-sm ${level.textColor}`}>{level.name}</p>
                        <p className="text-xs text-gray-600">{level.description}</p>
                        {selectedDifficulty === level.id && (
                          <p className="text-xs font-bold text-teal-600 mt-1">Selected</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Feature Highlight */}
              <div className="bg-gradient-to-br from-[#16a34a] to-[#10b981] text-white rounded-lg p-4 mb-6">
                <h3 className="font-bold text-sm mb-2">WHAT YOU'LL GET</h3>
                <p className="font-bold text-sm mb-3">Friendly quiz with instant feedback</p>
                <ul className="text-xs space-y-1">
                  <li>✓ Detailed explanations for every answer</li>
                  <li>✓ Instantly see the learner's profile</li>
                </ul>
              </div>

              <button
                onClick={handleGenerateQuiz}
                disabled={!selectedDifficulty}
                className={`w-full py-3 rounded-lg font-bold text-sm transition ${
                  selectedDifficulty
                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              >
                Generate Quiz
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 'feedback' && (
        <div className="flex-1 px-6 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Quiz Generated!</h1>
          <p className="text-sm text-gray-600 mb-8">
            Your custom quiz for <span className="font-bold">{selectedTopicName}</span> ({selectedDifficultyName}) is ready.
          </p>

          <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-2xl">
                🎯
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Quiz Ready</h3>
                <p className="text-sm text-gray-600">Your 4-question quiz is generated and ready to play!</p>
              </div>
            </div>
          </div>

          <button
            className="w-full py-3 bg-teal-500 text-white rounded-lg font-bold text-sm hover:bg-teal-600 transition"
          >
            Start Playing
          </button>
        </div>
      )}
    </div>
  );
}