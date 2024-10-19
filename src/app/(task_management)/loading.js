
const Loading = () => {
  return (
  <div className="h-screen flex justify-center items-center">
  <div className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-primary rounded-full " role="status" aria-label="loading">
  <span className="sr-only">Loading...</span>
</div>
  </div>
  )
}

export default Loading