"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const J="bgm",$="se",z="me",Z="bgs",x="battlebacks1",b="battlebacks2",__="characters",E_="enemies",A_="faces",T_="parallaxes",R_="pictures",t_="sv_actors",O_="sv_enemies",n_="system",C_="tilesets",S_="titles1",s_="titles2",o_="System.json",I_=11,c_=12,N_=13,L_=14,P_=21,e_=22,M_=23,U_=31,G_=32,F_=33,a_=34,D_=35,r_=41,H_=42,i_=43,Y_=44,m_=51,B_=52,V_=53,u_=54,W_=55,d_=61,K_=62,g_=63,p_=64,g=0,p=1,X=2,y=3,f=0,l=1,h=2,v=3,k=4,Q=5,X_=0,y_=1,f_=2,l_=3,n=0,C=1,S=2,s=3,o=4,I=5,c=6,N=7,L=8,P=9,e=0,M=1,U=2,G=3,F=4,a=5,D=6,r=7,H=0,i=1,Y=2,m=3,B=4,V=5,u=6,W=7,d=8,K=9,h_=0,v_=1,k_=2,Q_=0,w_=11,j_=12,q_=13,J_=21,$_=22,z_=31,Z_=32,x_=33,b_=34,_E=41,EE=42,AE=43,TE=44,RE=0,tE=101,OE=401,nE=102,CE=402,SE=103,sE=104,oE=105,IE=405,cE=108,NE=408,LE=109,PE=111,eE=411,ME=112,UE=113,GE=115,FE=117,aE=118,DE=119,rE=121,HE=122,iE=123,YE=124,mE=125,BE=126,VE=127,uE=128,WE=129,dE=132,KE=133,gE=134,pE=135,XE=136,yE=137,fE=138,lE=139,hE=140,vE=201,kE=202,QE=203,wE=204,jE=205,qE=206,JE=211,$E=212,zE=213,ZE=214,xE=216,bE=217,_A=221,EA=222,AA=223,TA=224,RA=225,tA=230,OA=231,nA=232,CA=233,SA=234,sA=235,oA=236,IA=241,cA=242,NA=243,LA=244,PA=245,eA=246,MA=249,UA=250,GA=251,FA=261,aA=282,DA=283,rA=284,HA=285,iA=301,YA=302,mA=605,BA=303,VA=311,uA=312,WA=313,dA=314,KA=315,gA=320,pA=321,XA=322,yA=323,fA=324,lA=325,hA=331,vA=332,kA=333,QA=334,wA=335,jA=336,qA=337,JA=339,$A=340,zA=351,ZA=342,xA=352,bA=353,_T=354,ET=355,AT=655,TT=356,RT=357,tT=0,OT=1,nT=2,CT=3,ST=4,sT=5,oT=6,IT=7,cT=8,NT=9,LT=10,PT=11,eT=12,MT=13,UT=14,GT=15,FT=16,aT=17,DT=18,rT=19,HT=20,iT=21,YT=22,mT=23,BT=24,VT=25,uT=26,WT=27,dT=28,KT=29,gT=30,pT=31,XT=32,yT=33,fT=34,lT=35,hT=36,vT=37,kT=38,QT=39,wT=40,jT=41,qT=42,JT=43,$T=44,zT=45,w=/^[a-zA-Z0-9]+$/,ZT=_=>w.test(_)?_:void 0,O=_=>typeof _=="string"?w.test(_):!1,xT=_=>[_.author,_.module,_.sourceKey].join("."),bT=_=>O(_.author)&&O(_.module)&&O(_.sourceKey),_R="params",ER="xparams",AR="sparams",TR="collaps",RR="partyAbiility",tR="sflag",OR="actors",nR="variables",CR="map",SR="enemy",sR="state",oR="skill",IR="items",cR="weapon",NR="armor",LR="class",PR="common_event",eR="troop",MR="colors",UR="weaponTypes",GR="armorTypes",FR="equipTypes",aR="switches",DR="skillTypes",rR="elements",j=(_,E)=>{const R={..._};for(const T in _){const t=E[T];typeof t=="string"&&(R[T]=t)}return R},HR=(_,E)=>{const R={};for(const T in _){const t=_[T],q=E[T]??{};R[T]=j(t,q)}return R},A=(_,E)=>({name:_,id:E}),iR=_=>_.variables.map(A),YR=_=>_.elements.map(A),mR=_=>_.equipTypes.map(A),BR=_=>_.skillTypes.map(A),VR=_=>_.weaponTypes.map(A),uR=_=>_.armorTypes.map(A),WR=_=>_.terms.params.map(A),dR=(_,E)=>{switch(_){case e:return E.maxHp;case M:return E.maxMp;case U:return E.atk;case G:return E.def;case F:return E.matk;case a:return E.mdef;case D:return E.agi;case r:return E.luk;default:return`?rparams[${_}]`}},KR=(_,E)=>{switch(_){case s:return E.criticalEvasionRate;case C:return E.evasionRate;case c:return E.counterAttackRate;case S:return E.criticalRate;case n:return E.hitRate;case N:return E.hpRegenerationRate;case o:return E.magicEvasionRate;case I:return E.magicReflectionRate;case L:return E.mpRegenerationRate;case P:return E.tpRegenerationRate}return`?xparams[${_}]`},gR=(_,E)=>{switch(_){case K:return E.experienceRate;case H:return E.targetRate;case d:return E.floorDamageRate;case i:return E.guradEffectRate;case B:return E.mpCostRate;case V:return E.tpChargeRate;case u:return E.physicalDamageRate;case W:return E.magicDamageRate;case m:return E.pharmacology;case Y:return E.recoveryEffectRate}return`?sparams[${_}]`},pR=(_,E)=>[{id:g,name:E.normal},{id:p,name:_.bossCollaps},{id:X,name:_.instantCollaps},{id:y,name:_.noneCollaps}],XR=_=>[{id:f,name:_.encounterHalf},{id:l,name:_.encounterNone},{id:h,name:_.cancelSurprise},{id:v,name:_.raisePreemptive},{id:k,name:_.goldDouble},{id:Q,name:_.dropItemDouble}],yR=_=>[{id:e,name:_.maxHp},{id:M,name:_.maxMp},{id:U,name:_.atk},{id:G,name:_.def},{id:F,name:_.matk},{id:a,name:_.mdef},{id:D,name:_.agi},{id:r,name:_.luk}],fR=_=>[{id:n,name:_.hitRate},{id:C,name:_.evasionRate},{id:S,name:_.criticalRate},{id:s,name:_.criticalEvasionRate},{id:o,name:_.magicEvasionRate},{id:I,name:_.magicReflectionRate},{id:c,name:_.counterAttackRate},{id:N,name:_.hpRegenerationRate},{id:L,name:_.mpRegenerationRate},{id:P,name:_.tpRegenerationRate}],lR=_=>[{id:H,name:_.targetRate},{id:i,name:_.guradEffectRate},{id:Y,name:_.recoveryEffectRate},{id:m,name:_.pharmacology},{id:B,name:_.mpCostRate},{id:V,name:_.tpChargeRate},{id:u,name:_.physicalDamageRate},{id:W,name:_.magicDamageRate},{id:d,name:_.floorDamageRate},{id:K,name:_.experienceRate}];exports.ABORT_BATTLE=$A;exports.BATTLE_PROCESSING=iA;exports.CHANGE_ACTOR_IMAGES=XA;exports.CHANGE_ARMORS=uE;exports.CHANGE_BATTLE_BACKGROUND=DA;exports.CHANGE_BATTLE_BGM=dE;exports.CHANGE_CLASS=pA;exports.CHANGE_DEFEAT_ME=lE;exports.CHANGE_ENCOUNTER=XE;exports.CHANGE_ENEMY_HP=hA;exports.CHANGE_ENEMY_MP=vA;exports.CHANGE_ENEMY_STATE=kA;exports.CHANGE_ENEMY_TP=ZA;exports.CHANGE_EXP=KA;exports.CHANGE_FORMATION_ACCESS=yE;exports.CHANGE_GOLD=mE;exports.CHANGE_HP=VA;exports.CHANGE_ITEMS=BE;exports.CHANGE_MENU_ACCESS=pE;exports.CHANGE_MP=uA;exports.CHANGE_NAME=gA;exports.CHANGE_NICKNAME=fA;exports.CHANGE_PARALLAX=rA;exports.CHANGE_PARTY_MEMBER=WE;exports.CHANGE_PLAYER_FOLLOWERS=xE;exports.CHANGE_PROFILE=lA;exports.CHANGE_SAVE_ACCESS=gE;exports.CHANGE_TILESET=aA;exports.CHANGE_TP=WA;exports.CHANGE_TRANSPARENCY=JE;exports.CHANGE_VEHICLE_BGM=hE;exports.CHANGE_VEHICLE_IMAGE=yA;exports.CHANGE_VICTORY_ME=KE;exports.CHANGE_WEAPONS=VE;exports.CHANGE_WINDOW_COLOR=fE;exports.COLLAPS_BOSS=p;exports.COLLAPS_INSTANT=X;exports.COLLAPS_NONE=y;exports.COLLAPS_NORMAL=g;exports.COMMENT=cE;exports.COMMENT_BODY=NE;exports.COMMON_EVENT=FE;exports.CONDITIONAL_BRANCH=PE;exports.CONDITIONAL_BRANCH_ELSE=eE;exports.CONTROL_SELF_SWITCH=iE;exports.CONTROL_SWITCHES=rE;exports.CONTROL_TIMER=YE;exports.CONTROL_VARIABLES=HE;exports.EFFECT_ADD_BUFF=z_;exports.EFFECT_ADD_DEBUFF=Z_;exports.EFFECT_ADD_STATE=J_;exports.EFFECT_COMMON_EVENT=TE;exports.EFFECT_GAIN_TP=q_;exports.EFFECT_GROW=EE;exports.EFFECT_LEARN_SKILL=AE;exports.EFFECT_RECOVER_HP=w_;exports.EFFECT_RECOVER_MP=j_;exports.EFFECT_REMOVE_BUFF=x_;exports.EFFECT_REMOVE_DEBUFF=b_;exports.EFFECT_REMOVE_STATE=$_;exports.EFFECT_SPECIAL=_E;exports.ENEMY_APPEAR=wA;exports.ENEMY_RECOVER_ALL=QA;exports.ENEMY_TRANSFORM=jA;exports.ERASE_EVENT=ZE;exports.ERASE_PICTURE=sA;exports.EXIT_EVENT_PROCESSING=GE;exports.EXTRA_PARAM_CEV=s;exports.EXTRA_PARAM_CNT=c;exports.EXTRA_PARAM_CRI=S;exports.EXTRA_PARAM_EVA=C;exports.EXTRA_PARAM_HIT=n;exports.EXTRA_PARAM_HRG=N;exports.EXTRA_PARAM_MEV=o;exports.EXTRA_PARAM_MRF=I;exports.EXTRA_PARAM_MRG=L;exports.EXTRA_PARAM_TRG=P;exports.FADEIN_SCREEN=EA;exports.FADEOUT_BGM=cA;exports.FADEOUT_BGS=eA;exports.FADEOUT_SCREEN=_A;exports.FILENAME_SYSTEM=o_;exports.FLAG_ID_AUTO_BATTLE=X_;exports.FLAG_ID_GUARD=y_;exports.FLAG_ID_PRESERVE_TP=l_;exports.FLAG_ID_SUBSTITUTE=f_;exports.FLASH_SCREEN=TA;exports.FOLDER_AUDIO_BGM=J;exports.FOLDER_AUDIO_BGS=Z;exports.FOLDER_AUDIO_ME=z;exports.FOLDER_AUDIO_SE=$;exports.FOLDER_IMG_BATTLEBACK1=x;exports.FOLDER_IMG_BATTLEBACK2=b;exports.FOLDER_IMG_CHACTERS=__;exports.FOLDER_IMG_ENEMIES=E_;exports.FOLDER_IMG_FACES=A_;exports.FOLDER_IMG_PARALLACES=T_;exports.FOLDER_IMG_PICTURES=R_;exports.FOLDER_IMG_SV_ACTORS=t_;exports.FOLDER_IMG_SV_ENEMIES=O_;exports.FOLDER_IMG_SYSTEM=n_;exports.FOLDER_IMG_TILESETS=C_;exports.FOLDER_IMG_TITLES1=S_;exports.FOLDER_IMG_TITLES2=s_;exports.FORCE_ACTION=JA;exports.GAME_OVER=bA;exports.GATHER_FOLLOWERS=bE;exports.GET_LOCATION_INFO=HA;exports.GET_ONOFF_VEHICLE=qE;exports.HITTYPE_CERTAIN=h_;exports.HITTYPE_MAGICAL=k_;exports.HITTYPE_PHYSICAL=v_;exports.INPUT_NUMBER=SE;exports.LABEL=aE;exports.LABEL_JUMP=DE;exports.LOOP=ME;exports.LOOP_BREAK=UE;exports.MOVE_PICTURE=nA;exports.NAME_INPUT_PROCESSING=BA;exports.NO_OPERATION=RE;exports.OPEN_MENU_SCREEN=zA;exports.OPEN_SAVE_SCREEN=xA;exports.PARTY_ABILITY_CANCEL_SURPRISE=h;exports.PARTY_ABILITY_DROP_ITEM_DOUBLE=Q;exports.PARTY_ABILITY_ENCOUNTER_HALF=f;exports.PARTY_ABILITY_ENCOUNTER_NONE=l;exports.PARTY_ABILITY_GOLD_DOUBLE=k;exports.PARTY_ABILITY_RAISE_PREEMPTIVE=v;exports.PLAY_BGM=IA;exports.PLAY_BGS=PA;exports.PLAY_ME=MA;exports.PLAY_MOVIE=FA;exports.PLAY_SE=UA;exports.PLUGIN_COMMAND_MV=TT;exports.PLUGIN_COMMAND_MZ=RT;exports.RECOVER_ALL=dA;exports.REGULAR_PARAM_AGI=D;exports.REGULAR_PARAM_ATK=U;exports.REGULAR_PARAM_DEF=G;exports.REGULAR_PARAM_LUK=r;exports.REGULAR_PARAM_MATK=F;exports.REGULAR_PARAM_MAX_HP=e;exports.REGULAR_PARAM_MAX_MP=M;exports.REGULAR_PARAM_MDEF=a;exports.RESUME_BGM=LA;exports.RETURN_TO_TITLE_SCREEN=_T;exports.ROTATE_PICTURE=CA;exports.ROUTE_CHANGE_BLEND_MODE=JT;exports.ROUTE_CHANGE_FREQ=gT;exports.ROUTE_CHANGE_IMAGE=jT;exports.ROUTE_CHANGE_OPACITY=qT;exports.ROUTE_CHANGE_SPEED=KT;exports.ROUTE_DIR_FIX_OFF=hT;exports.ROUTE_DIR_FIX_ON=lT;exports.ROUTE_END=tT;exports.ROUTE_JUMP=UT;exports.ROUTE_MOVE_AWAY=PT;exports.ROUTE_MOVE_BACKWARD=MT;exports.ROUTE_MOVE_DOWN=OT;exports.ROUTE_MOVE_FORWARD=eT;exports.ROUTE_MOVE_LEFT=nT;exports.ROUTE_MOVE_LOWER_L=sT;exports.ROUTE_MOVE_LOWER_R=oT;exports.ROUTE_MOVE_RANDOM=NT;exports.ROUTE_MOVE_RIGHT=CT;exports.ROUTE_MOVE_TOWARD=LT;exports.ROUTE_MOVE_UP=ST;exports.ROUTE_MOVE_UPPER_L=IT;exports.ROUTE_MOVE_UPPER_R=cT;exports.ROUTE_PLAY_SE=$T;exports.ROUTE_SCRIPT=zT;exports.ROUTE_STEP_ANIME_OFF=fT;exports.ROUTE_STEP_ANIME_ON=yT;exports.ROUTE_SWITCH_OFF=dT;exports.ROUTE_SWITCH_ON=WT;exports.ROUTE_THROUGH_OFF=kT;exports.ROUTE_THROUGH_ON=vT;exports.ROUTE_TRANSPARENT_OFF=wT;exports.ROUTE_TRANSPARENT_ON=QT;exports.ROUTE_TURN_180D=YT;exports.ROUTE_TURN_90D_L=iT;exports.ROUTE_TURN_90D_R=HT;exports.ROUTE_TURN_90D_R_L=mT;exports.ROUTE_TURN_AWAY=uT;exports.ROUTE_TURN_DOWN=FT;exports.ROUTE_TURN_LEFT=aT;exports.ROUTE_TURN_RANDOM=BT;exports.ROUTE_TURN_RIGHT=DT;exports.ROUTE_TURN_TOWARD=VT;exports.ROUTE_TURN_UP=rT;exports.ROUTE_WAIT=GT;exports.ROUTE_WALK_ANIME_OFF=XT;exports.ROUTE_WALK_ANIME_ON=pT;exports.SAVE_BGM=NA;exports.SCRIPT_EVAL=ET;exports.SCRIPT_EVAL_BODY=AT;exports.SCROLL_MAP=wE;exports.SELECT_ITEM=sE;exports.SET_EVENT_LOCATION=QE;exports.SET_MOVEMENT_ROUTE=jE;exports.SET_VEHICLE_LOCATION=kE;exports.SET_WEATHER_EFFECT=oA;exports.SHAKE_SCREEN=RA;exports.SHOP_PROCESSING=YA;exports.SHOP_PROCESSING_BODY=mA;exports.SHOW_ANIMATION=$E;exports.SHOW_BALLOON_ICON=zE;exports.SHOW_BATTLE_ANIMATION=qA;exports.SHOW_CHOICES=nE;exports.SHOW_CHOICES_ITEM=CE;exports.SHOW_MESSAGE=tE;exports.SHOW_MESSAGE_BODY=OE;exports.SHOW_PICTURE=OA;exports.SHOW_SCROLLING_TEXT=oE;exports.SHOW_SCROLLING_TEXT_BODY=IE;exports.SKIP=LE;exports.SPECIAL_EFFECT_ESCAPE=Q_;exports.SPECIAL_PARAM_EXR=K;exports.SPECIAL_PARAM_FDR=d;exports.SPECIAL_PARAM_GRD=i;exports.SPECIAL_PARAM_MCR=B;exports.SPECIAL_PARAM_MDR=W;exports.SPECIAL_PARAM_PDR=u;exports.SPECIAL_PARAM_PHA=m;exports.SPECIAL_PARAM_REC=Y;exports.SPECIAL_PARAM_TCR=V;exports.SPECIAL_PARAM_TGR=H;exports.SRC_ARMOR_TYPES=GR;exports.SRC_COLOR=MR;exports.SRC_COMMON_EVNET=PR;exports.SRC_DATA_ACTOR=OR;exports.SRC_DATA_ARMOR=NR;exports.SRC_DATA_CLASS=LR;exports.SRC_DATA_ENEMY=SR;exports.SRC_DATA_ITEMS=IR;exports.SRC_DATA_MAP=CR;exports.SRC_DATA_SKILL=oR;exports.SRC_DATA_STATE=sR;exports.SRC_DATA_VARIABLE=nR;exports.SRC_DATA_WEAPON=cR;exports.SRC_ELEMENTS=rR;exports.SRC_EQUIP_TYPES=FR;exports.SRC_PARAMS_EXTRA=ER;exports.SRC_PARAMS_REGULAR=_R;exports.SRC_PARAMS_SPECIAL=AR;exports.SRC_SKILL_TYPES=DR;exports.SRC_SWITCHES=aR;exports.SRC_TRAIT_COLLAPS=TR;exports.SRC_TRAIT_PARTY_ABILITY=RR;exports.SRC_TRAIT_SPECIAL_FLAG=tR;exports.SRC_TROOP=eR;exports.SRC_WEAPON_TYPES=UR;exports.STOP_SE=GA;exports.TINT_PICTURE=SA;exports.TINT_SCREEN=AA;exports.TRAIT_ACTION_PLUS=d_;exports.TRAIT_ATTACK_ELEMENT=U_;exports.TRAIT_ATTACK_SKILL=D_;exports.TRAIT_ATTACK_SPEED=F_;exports.TRAIT_ATTACK_STATE=G_;exports.TRAIT_ATTACK_TIMES=a_;exports.TRAIT_COLLAPSE_TYPE=g_;exports.TRAIT_DEBUFF_RATE=c_;exports.TRAIT_ELEMENT_RATE=I_;exports.TRAIT_EQUIP_ATYPE=B_;exports.TRAIT_EQUIP_LOCK=V_;exports.TRAIT_EQUIP_SEAL=u_;exports.TRAIT_EQUIP_WTYPE=m_;exports.TRAIT_PARAM=P_;exports.TRAIT_PARTY_ABILITY=p_;exports.TRAIT_SKILL_ADD=i_;exports.TRAIT_SKILL_SEAL=Y_;exports.TRAIT_SLOT_TYPE=W_;exports.TRAIT_SPARAM=M_;exports.TRAIT_SPECIAL_FLAG=K_;exports.TRAIT_STATE_RATE=N_;exports.TRAIT_STATE_RESIST=L_;exports.TRAIT_STYPE_ADD=r_;exports.TRAIT_STYPE_SEAL=H_;exports.TRAIT_XPARAM=e_;exports.TRANSFER_PLAYER=vE;exports.WAIT=tA;exports.extraParamName=KR;exports.foldCollapsOptions=pR;exports.foldExtraParam=fR;exports.foldPartyAbilityOptions=XR;exports.foldRegularParam=yR;exports.foldSpecialParams=lR;exports.getArmorTypes=uR;exports.getElements=YR;exports.getEquipTypes=mR;exports.getParamNames=WR;exports.getSkillTypes=BR;exports.getVariableNames=iR;exports.getWeaponTypes=VR;exports.isValid=bT;exports.joinSourceKey=xT;exports.mergeNestedPrimitiveRecords=HR;exports.mergeWithDefaults=j;exports.regularParamName=dR;exports.sanitizeKey=ZT;exports.specialParamName=gR;exports.testUnknonwKey=O;
//# sourceMappingURL=rpgTypes.cjs.js.map
