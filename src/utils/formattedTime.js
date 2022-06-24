// const now = new Date()
//   export const current = now.toLocaleTimeString('en-US', {

//     hour: '2-digit',
//     minute: '2-digit',
//   });

export const currentTime = () =>{
    const now = new Date() 
      const current = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });

      return current
}