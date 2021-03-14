const reachDestination = (distance, speed) => {
    const time = Match.round(distance / speed);
    
	return `I should be there in ${time} hours.`;
};

module.exports = reachDestination;
