var nodemailer = require('nodemailer');

const mail = async(req, res) => {
  try {
    const {email, username} = req.body;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'madhavbansal356@gmail.com',
          pass: 'wwmx royh cpwh dbty'
        }
      });
      
      var mailOptions = {
        from: 'madhavbansal356@gmail.com',
        to: `${email}`,
        subject: 'Welcome to Sociopedia - Your Social Encyclopedia',
        text: `Dear ${username},

        Welcome to Sociopedia, your go-to destination for connecting with like-minded individuals and exploring the diverse world of social knowledge!
        
        We are thrilled to have you as a member of our growing community. Sociopedia is more than just a platform; it's a space where you can share, 
        learn, and connect with people who share your interests. Whether you're passionate about a specific topic, looking to expand your network, 
        or simply curious about the world around you, Sociopedia is here to enrich your experience.
        
        Here are a few things you can explore right away:
        
        1. Profile Setup: Complete your profile to let others in the community know more about you. Add a profile picture and share your interests.
        
        2. Discover Topics: Dive into our diverse range of topics and communities. From technology to arts, there's something for everyone.
        
        2. Connect with Others: Connect with fellow enthusiasts, experts, and learners. Start engaging conversations and build meaningful connections.
        
        4. Stay Informed: Subscribe to your favorite topics to stay updated on the latest discussions and contributions.
        
        If you have any questions or need assistance, our support team is here to help. Feel free to reach out at [support@sociopedia.com].
        
        Once again, welcome to Sociopedia! We look forward to seeing your contributions and sharing in the excitement of exploration and discovery.
        
        Best regards,
        
        The Sociopedia Team`
      };
      
      await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return res.send(error);
        } else {
          console.log('Email sent: ' + info.response);
          return res.json("Email is Sent")
        }
      });
   }
    catch(error) {
        console.log(error);
        return res.send(error);
    }
}

module.exports = mail;