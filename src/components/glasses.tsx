export const Glasses = ({ className }: React.ComponentProps<'div'>) => {
  return (
    <div className={`absolute size-full  flex items-center justify-center z-1`}>
      <div className={`size-full bg-black/35 rounded-xl backdrop-blur-[6px] ${className}`} />
    </div>
  )
}