// src/components/MembersList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Importing Firebase DB configuration

const MembersList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch members from Firestore
    const unsubscribe = db
      .collection('members')
      .orderBy('joinedAt', 'desc')
      .onSnapshot((snapshot) => {
        setMembers(snapshot.docs.map(doc => doc.data()));
      });

    return () => unsubscribe(); // Clean up subscription
  }, []);

  return (
    <div className="members-list">
      <h2>Club Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            <strong>{member.name}</strong> - {member.email} - {member.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersList;
