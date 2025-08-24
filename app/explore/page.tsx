'use client';

import { useState, useEffect } from 'react';
import SkillCard from 'src/components/SkillCard';

// Placeholder function for blockchain integration
const getAllSkills = async () => {
  // TODO: Query CW721 contract for all skill NFTs
  return [
    {
      id: '1',
      name: 'Smart Contract Development',
      issuer: 'ConsenSys Academy',
      evidenceLink: 'https://ipfs.io/ipfs/QmExample1',
      owner: 'cosmos1abc123def456ghi789jkl012mno345pqr678stu901',
      endorsements: 42
    },
    {
      id: '2',
      name: 'React Development',
      issuer: 'Meta',
      evidenceLink: 'https://github.com/user/react-projects',
      owner: 'cosmos1xyz987wvu654tsr321qpo098nml765kji432hgf210',
      endorsements: 28
    },
    {
      id: '3',
      name: 'UI/UX Design',
      issuer: 'Google Design',
      evidenceLink: 'https://dribbble.com/user/portfolio',
      owner: 'cosmos1mno345pqr678stu901vwx234yza567bcd890efg123',
      endorsements: 35
    },
    {
      id: '4',
      name: 'Data Science',
      issuer: 'Coursera - Stanford',
      evidenceLink: 'https://www.coursera.org/account/accomplishments/verify/ABC123',
      owner: 'cosmos1hij456klm789nop012qrs345tuv678wxy901zab234',
      endorsements: 56
    },
    {
      id: '5',
      name: 'DevOps Engineering',
      issuer: 'AWS',
      evidenceLink: 'https://www.credly.com/badges/example',
      owner: 'cosmos1cde567fgh890ijk123lmn456opq789rst012uvw345',
      endorsements: 33
    },
    {
      id: '6',
      name: 'Machine Learning',
      issuer: 'MIT',
      evidenceLink: 'https://ipfs.io/ipfs/QmMLExample',
      owner: 'cosmos1pqr678stu901vwx234yza567bcd890efg123hij456',
      endorsements: 72
    }
  ];
};

export default function Explore() {
  const [skills, setSkills] = useState<any[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const allSkills = await getAllSkills();
        setSkills(allSkills);
        setFilteredSkills(allSkills);
      } catch (error) {
        console.error('Error loading skills:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  useEffect(() => {
    const filtered = skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.issuer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSkills(filtered);
  }, [searchTerm, skills]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4 text-white">Explore Talent</h1>
        <p className="text-gray-400 mb-8">Discover verified skills and endorse talented individuals</p>
        
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search skills or issuers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading skills...</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-white">
              {filteredSkills.length} Skill{filteredSkills.length !== 1 ? 's' : ''} Found
            </h2>
            <div className="text-gray-400">
              Total Endorsements: {filteredSkills.reduce((sum, skill) => sum + skill.endorsements, 0)}
            </div>
          </div>

          {filteredSkills.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill) => (
                <SkillCard 
                  key={skill.id} 
                  skill={skill} 
                  showOwner={true}
                  showLikeButton={true}
                />
              ))}
            </div>
          ) : (
            <div className="card text-center py-16">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">No Skills Found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search term or browse all available skills.
              </p>
              <button 
                onClick={() => setSearchTerm('')}
                className="btn-primary"
              >
                Clear Search
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}