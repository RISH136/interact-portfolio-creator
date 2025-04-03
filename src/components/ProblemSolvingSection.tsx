
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Check, Clock, Award, Brain, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const problemsSolved = [
  {
    platform: 'LeetCode',
    profileId: 'RISHABH467',
    profileUrl: 'https://leetcode.com/RISHABH467/',
    totalSolved: 350,
    easyCount: 120,
    easyTotal: 150,
    mediumCount: 180,
    mediumTotal: 250,
    hardCount: 50,
    hardTotal: 100,
    streak: 45,
    ranking: 'top 20% globally',
    badge: 'Platinum',
    strongAreas: ['Dynamic Programming', 'Graph Theory', 'Binary Search'],
  },
  {
    platform: 'GeeksforGeeks',
    profileId: 'rishabhdemjsc',
    profileUrl: 'https://auth.geeksforgeeks.org/user/rishabhdemjsc',
    totalSolved: 100,
    easyCount: 45,
    easyTotal: 60,
    mediumCount: 40,
    mediumTotal: 80,
    hardCount: 15,
    hardTotal: 40,
    streak: 30,
    ranking: '95th percentile',
    badge: 'Gold',
    strongAreas: ['Trees', 'Greedy Algorithms', 'Backtracking'],
  },
];

const ProblemSolvingSection = () => {
  return (
    <section id="problem-solving" className="py-16 bg-portfolio-dark-bg bg-[url('/stars-pattern.png')] bg-repeat">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white text-center mb-12">Problem Solving Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemsSolved.map((platform, index) => (
            <Card key={index} className="overflow-hidden bg-[#1E2235] border border-[#2A2F42] text-white">
              <CardHeader className="bg-[#2A2F42] flex flex-row justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Brain className="text-[#9b87f5]" />
                  {platform.platform} Stats
                </CardTitle>
                <Button variant="link" className="text-[#9b87f5] p-0" onClick={() => window.open(platform.profileUrl, '_blank')}>
                  @{platform.profileId} <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">Problems Solved</h3>
                    <span className="text-[#9b87f5] font-bold text-xl">
                      {platform.totalSolved}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mt-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Easy</span>
                        <span className="text-green-400">
                          {platform.easyCount}/{platform.easyTotal}
                        </span>
                      </div>
                      <Progress 
                        className="h-2 bg-[#2A2F42]" 
                        value={(platform.easyCount / platform.easyTotal) * 100} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Medium</span>
                        <span className="text-yellow-400">
                          {platform.mediumCount}/{platform.mediumTotal}
                        </span>
                      </div>
                      <Progress 
                        className="h-2 bg-[#2A2F42]" 
                        value={(platform.mediumCount / platform.mediumTotal) * 100} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Hard</span>
                        <span className="text-red-400">
                          {platform.hardCount}/{platform.hardTotal}
                        </span>
                      </div>
                      <Progress 
                        className="h-2 bg-[#2A2F42]" 
                        value={(platform.hardCount / platform.hardTotal) * 100} 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-[#2A2F42] pt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Check className="text-green-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Current Streak</p>
                      <p className="font-semibold">{platform.streak} days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="text-[#9b87f5]" />
                    <div>
                      <p className="text-gray-400 text-sm">Badge</p>
                      <p className="font-semibold">{platform.badge}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="text-[#9b87f5]" />
                    <div>
                      <p className="text-gray-400 text-sm">Ranking</p>
                      <p className="font-semibold">{platform.ranking}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 border-t border-[#2A2F42] pt-4">
                  <p className="text-gray-400 mb-2">Strong Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {platform.strongAreas.map((area, i) => (
                      <span key={i} className="bg-[#9b87f5]/20 text-[#9b87f5] px-3 py-1 rounded-full text-sm font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvingSection;
