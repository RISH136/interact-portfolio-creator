
import React from 'react';
import { Code, CheckCircle2, Trophy, Clock, Activity } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ProblemSolvingSection = () => {
  // Sample problem-solving stats
  const leetcodeStats = {
    solved: 325,
    total: 2500,
    ranking: "Top 5%",
    contests: 15,
    badges: ["Dynamic Programming", "Graph Theory", "Binary Search"]
  };
  
  const gfgStats = {
    solved: 210,
    totalScore: 1850,
    streak: 42,
    ranking: "Institute Rank #3",
    badges: ["Arrays", "Trees", "Greedy Algorithms"]
  };
  
  // Sample problems by difficulty
  const problemsByDifficulty = {
    easy: 150,
    medium: 120,
    hard: 55
  };
  
  // Calculate percentages
  const totalProblems = problemsByDifficulty.easy + problemsByDifficulty.medium + problemsByDifficulty.hard;
  const easyPercent = (problemsByDifficulty.easy / totalProblems) * 100;
  const mediumPercent = (problemsByDifficulty.medium / totalProblems) * 100;
  const hardPercent = (problemsByDifficulty.hard / totalProblems) * 100;
  
  // Sample recent problems
  const recentProblems = [
    { id: 1, name: "Two Sum", platform: "LeetCode", difficulty: "Easy", date: "3 days ago" },
    { id: 2, name: "LRU Cache Implementation", platform: "GeeksForGeeks", difficulty: "Medium", date: "5 days ago" },
    { id: 3, name: "Merge K Sorted Lists", platform: "LeetCode", difficulty: "Hard", date: "1 week ago" },
    { id: 4, name: "Valid Parentheses", platform: "LeetCode", difficulty: "Easy", date: "1 week ago" },
    { id: 5, name: "Dijkstra's Algorithm", platform: "GeeksForGeeks", difficulty: "Medium", date: "2 weeks ago" }
  ];
  
  return (
    <section id="problem-solving" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Problem Solving Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Platform Stats */}
          <div className="space-y-8">
            {/* LeetCode Stats */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold">LeetCode Profile</h3>
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  {leetcodeStats.ranking}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Problems Solved</span>
                  <span className="font-medium">{leetcodeStats.solved} / {leetcodeStats.total}</span>
                </div>
                <Progress className="h-2" value={(leetcodeStats.solved / leetcodeStats.total) * 100} />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <Trophy className="text-yellow-500 h-5 w-5 mr-2" />
                  <div>
                    <div className="text-sm text-gray-600">Contest Rating</div>
                    <div className="font-medium">1845</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <Activity className="text-green-500 h-5 w-5 mr-2" />
                  <div>
                    <div className="text-sm text-gray-600">Contests</div>
                    <div className="font-medium">{leetcodeStats.contests} Participated</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-600 mb-2">Badges</div>
                <div className="flex flex-wrap gap-2">
                  {leetcodeStats.badges.map((badge) => (
                    <span key={badge} className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-xs font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* GeeksForGeeks Stats */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold">GeeksForGeeks Profile</h3>
                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  {gfgStats.ranking}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Total Score</span>
                  <span className="font-medium">{gfgStats.totalScore} points</span>
                </div>
                <Progress className="h-2" value={75} />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <CheckCircle2 className="text-green-500 h-5 w-5 mr-2" />
                  <div>
                    <div className="text-sm text-gray-600">Problems Solved</div>
                    <div className="font-medium">{gfgStats.solved}</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <Clock className="text-blue-500 h-5 w-5 mr-2" />
                  <div>
                    <div className="text-sm text-gray-600">Streak</div>
                    <div className="font-medium">{gfgStats.streak} days</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-600 mb-2">Strong Topics</div>
                <div className="flex flex-wrap gap-2">
                  {gfgStats.badges.map((badge) => (
                    <span key={badge} className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-xs font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Problem Stats and Recent Activity */}
          <div className="space-y-8">
            {/* Problems by Difficulty */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Problems by Difficulty</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></span>
                      Easy
                    </span>
                    <span className="font-medium">{problemsByDifficulty.easy}</span>
                  </div>
                  <Progress className="h-2 bg-gray-200" value={easyPercent} indicatorClassName="bg-green-500" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center">
                      <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block mr-2"></span>
                      Medium
                    </span>
                    <span className="font-medium">{problemsByDifficulty.medium}</span>
                  </div>
                  <Progress className="h-2 bg-gray-200" value={mediumPercent} indicatorClassName="bg-yellow-500" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded-full inline-block mr-2"></span>
                      Hard
                    </span>
                    <span className="font-medium">{problemsByDifficulty.hard}</span>
                  </div>
                  <Progress className="h-2 bg-gray-200" value={hardPercent} indicatorClassName="bg-red-500" />
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Total Problems Solved</h4>
                <div className="text-3xl font-bold text-portfolio-blue">{totalProblems}</div>
              </div>
            </div>
            
            {/* Recent Problems */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Recently Solved Problems</h3>
              
              <div className="space-y-3">
                {recentProblems.map((problem) => (
                  <div key={problem.id} className="p-3 border rounded-lg flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="font-medium">{problem.name}</h4>
                      <div className="text-sm text-gray-500">{problem.platform} • {problem.date}</div>
                    </div>
                    <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                      problem.difficulty === "Easy" ? "bg-green-100 text-green-600" : 
                      problem.difficulty === "Medium" ? "bg-yellow-100 text-yellow-600" : 
                      "bg-red-100 text-red-600"
                    }`}>
                      {problem.difficulty}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvingSection;
