export function getProjects() {
  return [
    {
      id: 0,
      title: 'Twitter Clone',
      description: `A twitter clone made using next js framework and sqlite used as the database and used JWT for authorization and authentication.\n
        You can also try this by following the instructions provided in the README file
        `,
      href: 'https://github.com/ashishsurya/twitter-clone-nextjs',
      chips: ['Nextjs', 'SQLite', 'J.W.T', 'REST Api','Tailwind CSS'],
      images: [
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/Twitter%20Project/Twitter-1.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/Twitter%20Project/Twitter-2.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/Twitter%20Project/Twitter-3.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/Twitter%20Project/Twitter-4.png',
        },
      ],
    },
    {
      id: 1,
      title: 'Expensometer',
      href: 'https://github.com/suhasparuchuri/Expensometer',
      images: [
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/Expensometer/expensometer-1.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/Expensometer/expensometer-2.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/Expensometer/expensometer-3.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/Expensometer/expensometer-4.png',
        },
      ],
      description: `This is web app for managing all the transactions done by a user inorder to help him analyze his spend.Special feature of the web app is transactions can be added using audio(Powered by Speechly).
      `,
      chips: ['Firebase', 'React', 'Speechify', 'react-chart-js'],
    },
    {
      id: 2,
      title: 'Google Keep Clone',
      href: 'https://github.com/ashishsurya/google-keep-clone',
      images: [
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/keep/keep-1.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/keep/keep-2.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/keep/keep-3.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya/Project-Images/main/keep/keep4.png',
        },
      ],
      description: `Clone of google's reminder and note-taking app.`,
      chips: ['Firebase', 'React', 'Redux', 'Material UI'],
    },
    {
      id: 4,
      title: 'Cricket Score Predictor',
      href: 'https://github.com/ashishsurya/flask-score-predictor',
      images: [
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya126/flask-score-predictor/master/images/1.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya126/flask-score-predictor/master/images/2.png',
        },
        {
          original:
            'https://raw.githubusercontent.com/ashishsurya126/flask-score-predictor/master/images/3.png',
        },
      ],
      description: `A simple web app that predicts the score of a cricket match(ODI/T20). Built using flask and sklearn.

      This machine learning model will predict the total score of the cricket match based on a machine learning algorithm known as Linear Regression.
      `,
      chips: ['Flask' , 'Bootstrap' , 'Scikit Learn' , 'Machine Learning'],
    },
  ];
}
