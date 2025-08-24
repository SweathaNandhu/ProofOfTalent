'use client';

import Link from 'next/link';

// Placeholder function for blockchain integration
const likeSkill = async (skillId: string) => {
  console.log('Liking skill:', skillId);
  // TODO: Integrate with CosmWasm CW20 contract to mint endorsement tokens
  return Promise.resolve({ success: true });
};

interface SkillCardProps {
  skill: {
    id: string;
    name: string;
    issuer: string;
    evidenceLink: string;
    owner: string;
    endorsements: number;
  };
  showOwner?: boolean;
  showLikeButton?: boolean;
}

export default function SkillCard({ skill, showOwner = false, showLikeButton = false }: SkillCardProps) {
  const handleLike = async () => {
    try {
      await likeSkill(skill.id);
      // In a real app, you'd update the local state or refetch data
      alert('Endorsement sent! CW20 tokens minted to skill owner.');
    } catch (error) {
      alert('Error sending endorsement. Please try again.');
    }
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };

  return (
    <div className="card hover:transform hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
        <div className="flex items-center text-sm text-gray-400">
          <svg className="w-4 h-4 mr-1 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          {skill.endorsements}
        </div>
      </div>
      
      <div className="space-y-3 text-sm text-gray-400 mb-6">
        <div>
          <span className="text-gray-300 font-medium">Issuer:</span> {skill.issuer}
        </div>
        {showOwner && (
          <div>
            <span className="text-gray-300 font-medium">Owner:</span> 
            <Link href={`/u/${skill.owner}`} className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">
              {truncateAddress(skill.owner)}
            </Link>
          </div>
        )}
        <div>
          <span className="text-gray-300 font-medium">Evidence:</span>{' '}
          <a 
            href={skill.evidenceLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            View Proof
          </a>
        </div>
      </div>
      
      <div className="flex gap-3">
        {showLikeButton && (
          <button 
            onClick={handleLike}
            className="btn-secondary text-sm px-4 py-2 flex-1 flex items-center justify-center"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            Endorse
          </button>
        )}
        {showOwner && (
          <Link href={`/u/${skill.owner}`} className="btn-primary text-sm px-4 py-2 flex-1 text-center">
            View Profile
          </Link>
        )}
      </div>
    </div>
  );
}