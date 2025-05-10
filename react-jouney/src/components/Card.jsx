export default function Cards() {
  const cards = [
    {
      name: "Card 1",
      description: "This image card no:1",
      image:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t45.1600-4/392787299_23862196860690316_3884763505948143472_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444_tt6&_nc_cat=1&ccb=1-7&_nc_sid=b81fdb&_nc_ohc=DOk6I4cpXU8Q7kNvwGCIrVs&_nc_oc=AdnUSljvdKhBevf3WlPPNuB4htbgl_HCEgNNIx0unm6B8N0SSHbcauYBEdh1EdHJJ00&_nc_zt=1&_nc_ht=scontent.fdac99-1.fna&_nc_gid=C2KEwBZ2zFMi8eVR4Mg_KA&oh=00_AfKJRZl9GyXPexiP_LyaOT_mN34EGeX5T20GHLRyq9wENw&oe=6823D6CA",
    },
    {
      name: "Card 2",
      description: "This image card no:2",
      image:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t45.1600-4/392787299_23862196860690316_3884763505948143472_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444_tt6&_nc_cat=1&ccb=1-7&_nc_sid=b81fdb&_nc_ohc=DOk6I4cpXU8Q7kNvwGCIrVs&_nc_oc=AdnUSljvdKhBevf3WlPPNuB4htbgl_HCEgNNIx0unm6B8N0SSHbcauYBEdh1EdHJJ00&_nc_zt=1&_nc_ht=scontent.fdac99-1.fna&_nc_gid=C2KEwBZ2zFMi8eVR4Mg_KA&oh=00_AfKJRZl9GyXPexiP_LyaOT_mN34EGeX5T20GHLRyq9wENw&oe=6823D6CA",
    },
    {
      name: "Card 3",
      description: "This image card no:3",
      image:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t45.1600-4/392787299_23862196860690316_3884763505948143472_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444_tt6&_nc_cat=1&ccb=1-7&_nc_sid=b81fdb&_nc_ohc=DOk6I4cpXU8Q7kNvwGCIrVs&_nc_oc=AdnUSljvdKhBevf3WlPPNuB4htbgl_HCEgNNIx0unm6B8N0SSHbcauYBEdh1EdHJJ00&_nc_zt=1&_nc_ht=scontent.fdac99-1.fna&_nc_gid=C2KEwBZ2zFMi8eVR4Mg_KA&oh=00_AfKJRZl9GyXPexiP_LyaOT_mN34EGeX5T20GHLRyq9wENw&oe=6823D6CA",
    },
  ];

  return (
    <>
      {cards.map((card, index) => (

        <div key={index} className="rounded-md shadow-md border border-gray-200 p-4">

          <h1 className="font-bold text-lg mb-2">{card.name}</h1>

          <img
            src={card.image}
            alt={card.name}
            className="w-full h-48 object-cover rounded-md mb-3"
          />

          <p className="text-sky-600 mb-4">{card.description}</p>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Read More..
          </button>
          
        </div>
      ))}
    </>
  );
}
