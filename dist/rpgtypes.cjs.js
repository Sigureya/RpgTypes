"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const E=0,_=1,O=2,T=3,R=32,A=48,N=0,S=101,C=401,I=102,L=402,U=103,s=104,t=105,M=405,c=108,o=408,n=109,G=111,H=411,D=112,P=113,F=115,B=117,V=118,W=119,Y=121,e=122,K=123,a=124,X=125,l=126,i=127,r=128,b=129,m=132,g=133,u=134,J=135,p=136,v=137,y=138,d=139,f=140,k=201,Q=202,Z=203,h=204,j=205,x=206,q=211,w=212,z=213,$=214,EE=216,_E=217,OE=221,TE=222,RE=223,AE=224,NE=225,SE=230,CE=231,IE=232,LE=233,UE=234,sE=235,tE=236,ME=241,cE=242,oE=243,nE=244,GE=245,HE=246,DE=249,PE=250,FE=251,BE=261,VE=282,WE=283,YE=284,eE=301,KE=302,aE=605,XE=303,lE=311,iE=312,rE=313,bE=320,mE=321,gE=322,uE=323,JE=324,pE=325,vE=352,yE=353,dE=354,fE=355,kE=655,QE=356,ZE=357,hE=0,jE=1,xE=2,qE=3,wE=4,zE=5,$E=6,E_=7,__=8,O_=9,T_=10,R_=11,A_=12,N_=13,S_=14,C_=15,I_=16,L_=17,U_=18,s_=19,t_=20,M_=21,c_=22,o_=23,n_=24,G_=25,H_=26,D_=27,P_=28,F_=29,B_=30,V_=31,W_=32,Y_=33,e_=34,K_=35,a_=36,X_=37,l_=38,i_=39,r_=40,b_=41,m_=42,g_=43,u_=44,J_=45,p_="bgm",v_="se",y_="me",d_="bgs",f_="battlebacks1",k_="battlebacks2",Q_="characters",Z_="enemies",h_="faces",j_="parallaxes",x_="pictures",q_="sv_actors",w_="sv_enemies",z_="system",$_="tilesets",EO="titles1",_O="titles2";exports.BATTLE_PROCESSING=eE;exports.CHANGE_ACTOR_IMAGES=gE;exports.CHANGE_ARMORS=r;exports.CHANGE_BATTLE_BACKGROUND=WE;exports.CHANGE_BATTLE_BGM=m;exports.CHANGE_CLASS=mE;exports.CHANGE_DEFEAT_ME=d;exports.CHANGE_ENCOUNTER=p;exports.CHANGE_FORMATION_ACCESS=v;exports.CHANGE_GOLD=X;exports.CHANGE_HP=lE;exports.CHANGE_ITEMS=l;exports.CHANGE_MENU_ACCESS=J;exports.CHANGE_MP=iE;exports.CHANGE_NAME=bE;exports.CHANGE_NICKNAME=JE;exports.CHANGE_PARALLAX=YE;exports.CHANGE_PARTY_MEMBER=b;exports.CHANGE_PLAYER_FOLLOWERS=EE;exports.CHANGE_PROFILE=pE;exports.CHANGE_SAVE_ACCESS=u;exports.CHANGE_TILESET=VE;exports.CHANGE_TP=rE;exports.CHANGE_TRANSPARENCY=q;exports.CHANGE_VEHICLE_IMAGE=uE;exports.CHANGE_VEHICLE_ME=f;exports.CHANGE_VICTORY_ME=g;exports.CHANGE_WEAPONS=i;exports.CHANGE_WINDOW_COLOR=y;exports.COMMENT=c;exports.COMMENT_BODY=o;exports.COMMON_EVENT=B;exports.CONDITIONAL_BRANCH=G;exports.CONDITIONAL_BRANCH_ELSE=H;exports.CONTROL_SELF_SWITCH=K;exports.CONTROL_SWITCHES=Y;exports.CONTROL_TIMER=a;exports.CONTROL_VARIABLES=e;exports.ERASE_EVENT=$;exports.ERASE_PICTURE=sE;exports.EXIT_EVENT_PROCESSING=F;exports.FADEIN_SCREEN=TE;exports.FADEOUT_BGM=cE;exports.FADEOUT_BGS=HE;exports.FADEOUT_SCREEN=OE;exports.FLAG_ID_AUTO_BATTLE=E;exports.FLAG_ID_GUARD=_;exports.FLAG_ID_PRESERVE_TP=T;exports.FLAG_ID_SUBSTITUTE=O;exports.FLASH_SCREEN=AE;exports.FOLDER_AUDIO_BGM=p_;exports.FOLDER_AUDIO_BGS=d_;exports.FOLDER_AUDIO_ME=y_;exports.FOLDER_AUDIO_SE=v_;exports.FOLDER_IMG_BATTLEBACK1=f_;exports.FOLDER_IMG_BATTLEBACK2=k_;exports.FOLDER_IMG_CHACTERS=Q_;exports.FOLDER_IMG_ENEMIES=Z_;exports.FOLDER_IMG_FACES=h_;exports.FOLDER_IMG_PARALLACES=j_;exports.FOLDER_IMG_PICTURES=x_;exports.FOLDER_IMG_SV_ACTORS=q_;exports.FOLDER_IMG_SV_ENEMIES=w_;exports.FOLDER_IMG_SYSTEM=z_;exports.FOLDER_IMG_TILESETS=$_;exports.FOLDER_IMG_TITLES1=EO;exports.FOLDER_IMG_TITLES2=_O;exports.GAME_OVER=yE;exports.GATHER_FOLLOWERS=_E;exports.GET_ONOFF_VEHICLE=x;exports.ICON_BUFF_START=R;exports.ICON_DEBUFF_START=A;exports.INPUT_NUMBER=U;exports.LABEL=V;exports.LABEL_JUMP=W;exports.LOOP=D;exports.LOOP_BREAK=P;exports.MOVE_PICTURE=IE;exports.NAME_INPUT_PROCESSING=XE;exports.NO_OPERATION=N;exports.OPEN_SAVE_SCREEN=vE;exports.PLAY_BGM=ME;exports.PLAY_BGS=GE;exports.PLAY_ME=DE;exports.PLAY_MOVIE=BE;exports.PLAY_SE=PE;exports.PLUGIN_COMMAND_MV=QE;exports.PLUGIN_COMMAND_MZ=ZE;exports.RESUME_BGM=nE;exports.RETURN_TO_TITLE_SCREEN=dE;exports.ROTATE_PICTURE=LE;exports.ROUTE_CHANGE_BLEND_MODE=g_;exports.ROUTE_CHANGE_FREQ=B_;exports.ROUTE_CHANGE_IMAGE=b_;exports.ROUTE_CHANGE_OPACITY=m_;exports.ROUTE_CHANGE_SPEED=F_;exports.ROUTE_DIR_FIX_OFF=a_;exports.ROUTE_DIR_FIX_ON=K_;exports.ROUTE_END=hE;exports.ROUTE_JUMP=S_;exports.ROUTE_MOVE_AWAY=R_;exports.ROUTE_MOVE_BACKWARD=N_;exports.ROUTE_MOVE_DOWN=jE;exports.ROUTE_MOVE_FORWARD=A_;exports.ROUTE_MOVE_LEFT=xE;exports.ROUTE_MOVE_LOWER_L=zE;exports.ROUTE_MOVE_LOWER_R=$E;exports.ROUTE_MOVE_RANDOM=O_;exports.ROUTE_MOVE_RIGHT=qE;exports.ROUTE_MOVE_TOWARD=T_;exports.ROUTE_MOVE_UP=wE;exports.ROUTE_MOVE_UPPER_L=E_;exports.ROUTE_MOVE_UPPER_R=__;exports.ROUTE_PLAY_SE=u_;exports.ROUTE_SCRIPT=J_;exports.ROUTE_STEP_ANIME_OFF=e_;exports.ROUTE_STEP_ANIME_ON=Y_;exports.ROUTE_SWITCH_OFF=P_;exports.ROUTE_SWITCH_ON=D_;exports.ROUTE_THROUGH_OFF=l_;exports.ROUTE_THROUGH_ON=X_;exports.ROUTE_TRANSPARENT_OFF=r_;exports.ROUTE_TRANSPARENT_ON=i_;exports.ROUTE_TURN_180D=c_;exports.ROUTE_TURN_90D_L=M_;exports.ROUTE_TURN_90D_R=t_;exports.ROUTE_TURN_90D_R_L=o_;exports.ROUTE_TURN_AWAY=H_;exports.ROUTE_TURN_DOWN=I_;exports.ROUTE_TURN_LEFT=L_;exports.ROUTE_TURN_RANDOM=n_;exports.ROUTE_TURN_RIGHT=U_;exports.ROUTE_TURN_TOWARD=G_;exports.ROUTE_TURN_UP=s_;exports.ROUTE_WAIT=C_;exports.ROUTE_WALK_ANIME_OFF=W_;exports.ROUTE_WALK_ANIME_ON=V_;exports.SAVE_BGM=oE;exports.SCRIPT_EVAL=fE;exports.SCRIPT_EVAL_BODY=kE;exports.SCROLL_MAP=h;exports.SELECT_ITEM=s;exports.SET_EVENT_LOCATION=Z;exports.SET_MOVEMENT_ROUTE=j;exports.SET_VEHICLE_LOCATION=Q;exports.SET_WEATHER_EFFECT=tE;exports.SHAKE_SCREEN=NE;exports.SHOP_PROCESSING=KE;exports.SHOP_PROCESSING_BODY=aE;exports.SHOW_ANIMATION=w;exports.SHOW_BALLOON_ICON=z;exports.SHOW_CHOICES=I;exports.SHOW_CHOICES_ITEM=L;exports.SHOW_MESSAGE=S;exports.SHOW_MESSAGE_BODY=C;exports.SHOW_PICTURE=CE;exports.SHOW_SCROLLING_TEXT=t;exports.SHOW_SCROLLING_TEXT_BODY=M;exports.SKIP=n;exports.STOP_SE=FE;exports.TINT_PICTURE=UE;exports.TINT_SCREEN=RE;exports.TRANSFER_PLAYER=k;exports.WAIT=SE;
//# sourceMappingURL=rpgtypes.cjs.js.map
