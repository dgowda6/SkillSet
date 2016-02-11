(function(){
    var app = angular.module('skill',[]);
    
    var skillModel = [
        {
            SkillID : 1,
            SkillName : "SAP UI5",
            SkillPercentage : "70"
        },
        {
            SkillID : 2,
            SkillName : "SAP HANA",
            SkillPercentage : "30"
        },
    ];
    
    var selectedSkill = {};
    
    app.controller('SkillController', function(){
        this.skill = skillModel;
        
        this.getSelectedSkill = function(skill){
            this.displaySkill = {};
            this.displaySkill = skill;
        };
    });
    
    app.controller('AddSkillController', function(){
        this.skill = {};
        
        this.addSkill = function(skill){
            this.skill.SkillID = skill.length + 1 
            skill.push(this.skill);
            this.skill = {};
            $("#addModal").modal('hide');
        };
    });
    
    app.controller('DisplaySkillController', function(){
        this.skill =  selectedSkill;
        selectedSkill = {};
    });
    
})();
