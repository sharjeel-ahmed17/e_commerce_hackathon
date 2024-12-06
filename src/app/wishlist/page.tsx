import Card from "@/components/card/Card"


const Wishlist = () => {
  return (
  <>
  <div className="flex justify-between py-4 items-center">
    <p>wishlit (4)</p>
    <button className="p-4">move all to bag</button>
  </div>

 <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-3">

    <Card/>
    <Card/>
    <Card/>
    <Card/>
 </div>
    <div className="flex justify-between py-4 items-center">
      <div className="flex gap-4">
        <div className="w-4 h-6 bg-red-600"></div>
    <p>just for you</p>
      </div>
    <button className="p-4">see all</button>
  </div>
   
  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-3">

<Card/>
<Card/>
<Card/>
<Card/>
</div>
   


  </>
  )
}

export default Wishlist