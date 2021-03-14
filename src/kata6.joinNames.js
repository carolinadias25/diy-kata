const joinNames = namesObj => {
    const arrayNames = namesObj.map(item => item.name).join(", ").replace(/,(?!.*,)/, " &");
    return arrayNames;
};

module.exports = joinNames;
