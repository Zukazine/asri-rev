'use client'

import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

export const OverlayIllustration = () => {
  const [click, setClick] = useState(true)

	return (
		<button onClick={() => { setClick(!click) }}>
			<div style={{perspective: 600}}>
				<div 
					className="group flex relative w-24 h-1" 
					style={{
						transformStyle: 'preserve-3d',
						transform: 'rotateX(-30deg) rotateY(-45deg)',
					}}
				>
					{click ?
						<>
							<div 
								className="absolute flex items-center justify-center w-full h-24 bg-neutral-200 group-hover:bg-white border border-gray-300 transition-all duration-300" 
								style={{ transform: 'rotateX(90deg) translateZ(3rem)' }}
							>
								<FaRegEye
									className="max-w-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
									style={{
										transform: 'rotateZ(135deg) rotateY(45deg)'
									}}
								/>
							</div>
							<div 
								className="absolute w-full h-[2px] group-hover:h-[10px] bg-white border border-black transition-all duration-300" 
								style={{ transform: 'translateZ(3rem)' }}
								/>
							<div 
								className="absolute w-full h-[2px] group-hover:h-[10px] bg-white border border-black transition-all duration-300" 
								style={{ transform: 'rotateY(90deg) translateZ(3rem)' }} 
							/>
						</>
					:
						<>
							<div 
								className="absolute flex items-center justify-center w-full h-24 bg-neutral-800 group-hover:bg-neutral-600 border border-gray-300 hover:border-white transition-all duration-300" 
								style={{ transform: 'rotateX(90deg) translateZ(3rem)' }}>
								<FaRegEyeSlash
									className="max-w-8 opacity-0 group-hover:opacity-100"
									style={{
										transform: 'rotateZ(135deg) rotateY(45deg)'
									}}
								/>
							</div>
							<div 
								className="absolute w-full h-[2px] group-hover:h-[10px] bg-neutral-800 border border-black transition-all duration-300" 
								style={{ transform: 'translateZ(3rem)' }} />
							<div 
								className="absolute w-full h-[2px] group-hover:h-[10px] bg-neutral-800 border border-black transition-all duration-300" 
								style={{ transform: 'rotateY(90deg) translateZ(3rem)' }}/>
						</>
					}
				</div>
			</div>
		</button>
	);

}
