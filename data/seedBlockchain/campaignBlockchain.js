
campaign.find({}, function(err, allcampaigns) {
    
    allcampaigns.forEach(function(campaignInstance) {
        // @shritesh do you function here
        console.log(campaignInstance)

    });
}
)
