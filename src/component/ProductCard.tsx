import React, { use } from 'react';

interface ItoolType {
    id: number;
    name: string;
    category: string;
    description: string;
    icon?: string;
}

interface ToolProps {
    toolsPromise: Promise<ItoolType[]>;
}

const ProductCard = ({ toolsPromise }: ToolProps) => {
    const tools = use(toolsPromise);
    
    return (
        <section className='max-w-7xl mx-auto px-4 py-10'>

            {/* Heading */}
            <div>

            <h2 className='text-3xl font-bold'>Explore the 
                
            <span className='bg-[linear-gradient(90deg,#EC4899_0%,#8B5CF6_100%)] bg-clip-text text-transparent'>Technologies</span>
                
            </h2>
            
            <p className='text-[#64748B] py-3'>Pick one technology per category to build your ideal stack.</p>
            
            </div>

            {/* Card + Your Stack */}

            <div className='grid grid-cols-4 gap-4 mt-6'>

            {/* Technology Card */}

            <div className='col-span-3 grid grid-cols-3 gap-4 bg-amber-800'>  

            {
                tools.map((tool)=>{
                    return <div>
                        {tool.id}
                    </div>
                })
            }

            </div>

            {/* Your Stack */}

            <div className='col-span-1 bg-amber-400'>

            </div>

            </div>

        </section>
    );
};

export default ProductCard;