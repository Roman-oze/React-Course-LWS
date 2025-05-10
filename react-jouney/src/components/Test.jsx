export default function Avatar() {
  const avatar = "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/486161070_2676806079185809_1048773573342625056_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Vdp957jaaeMQ7kNvwHbvRlC&_nc_oc=Adl7_XFoJfUL43rVD3QEPqvStdk8njR0syCs0bFbbJNBiZCh_ukPT1ZtgckzyjNxqQU&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=qgjjacog4zIgp9bI4-6LQw&oh=00_AfKUmnx165OCnYwKWXLju5Wf7itjb1yLiVO89jxy-kh70g&oe=6823FE1D";
  const description = "profile-image";

  return (
    <>
      <img className="avatar" src={avatar} alt={description} 
      style={
        {
           borderRadius : '50%',
           width: '200px',
           height: '200px',
           

        }
      } 
      />
    </>
  );
}
